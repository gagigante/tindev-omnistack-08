import LikeUserUseCase from '../useCases/LikeUserUseCase';

const LikeController = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const response = await LikeUserUseCase.execute({
      loggedUserId: user,
      targetDevId: devId,
      req,
    });

    return res.json(response);
  },
};

export default LikeController;
