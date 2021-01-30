import CreateDevUseCase from '../useCases/CreateDevUseCase';
import GetAvailableUsersUseCase from '../useCases/GetAvailableUsersUseCase';

const DevController = {
  async index(req, res) {
    const { user: userId } = req.headers;

    const users = await GetAvailableUsersUseCase.execute({ userId });

    return res.json(users);
  },

  async store(req, res) {
    const username = req.body.username.trim().toLowerCase();

    const response = await CreateDevUseCase.execute({ username });

    return res.json(response);
  },
};

export default DevController;
