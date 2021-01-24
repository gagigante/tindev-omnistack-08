import createDevUseCase from '../useCases/createDevUseCase';
import getAvailableUsersUseCase from '../useCases/getAvailableUsersUseCase';

const DevController = {
  async index(req, res) {
    const { user: userId } = req.headers;

    const users = await getAvailableUsersUseCase.execute({ userId });

    return res.json(users);
  },

  async store(req, res) {
    const username = req.body.username.trim().toLowerCase();

    const response = await createDevUseCase.execute({ username });

    return res.json(response);
  },
};

export default DevController;
