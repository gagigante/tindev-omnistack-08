import LikeDevUseCase from '../useCases/LikeUserDevCase';

class LikeController {
  static async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const response = await LikeDevUseCase.execute({
      loggedUserId: user,
      targetDevId: devId,
      req,
    });

    return res.json(response);
  }
}

export default LikeController;
