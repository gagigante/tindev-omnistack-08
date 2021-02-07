import DevRepository from '../repositories/DevRepository';

const LikeUserUseCase = {
  async execute({ loggedUserId, targetDevId, req }) {
    const loggedDev = await DevRepository.findById({ userId: loggedUserId });
    const targetDev = await DevRepository.findById({ userId: targetDevId });

    if (!targetDev) {
      return new Error();
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      const loggedSocket = req.connectedUsers[loggedUserId];
      const targetSocket = req.connectedUsers[targetDevId];

      if (loggedSocket) {
        req.io.to(loggedSocket).emit('match', targetDev);
      }

      if (targetSocket) {
        req.io.to(targetSocket).emit('match', loggedDev);
      }
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return loggedDev;
  },
};

export default LikeUserUseCase;
