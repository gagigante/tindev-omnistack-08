import CreateDevUseCase from '../useCases/CreateDevUseCase';
import GetAvailableDevsUseCase from '../useCases/GetAvailableDevsUseCase';

class DevController {
  static async index(req, res) {
    const { user: userId } = req.headers;

    const users = await GetAvailableDevsUseCase.execute({ userId });

    return res.json(users);
  }

  static async store(req, res) {
    const username = req.body.username.trim().toLowerCase();

    const response = await CreateDevUseCase.execute({ username });

    return res.json(response);
  }
}

export default DevController;
