import createDevUseCase from '../useCases/createDevUseCase';

const DevController = {
  async store(req, res) {
    const username = req.body.username.trim().toLowerCase();

    const response = await createDevUseCase.execute({ username });

    return res.json(response);
  },
};

export default DevController;
