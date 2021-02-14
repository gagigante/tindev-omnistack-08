import DevRepository from '../repositories/DevRepository';

class GetAvailableDevsUseCase {
  static async execute({ userId }) {
    const loggedDev = await DevRepository.findById({ userId });

    const users = await DevRepository.findAvailableDevs({ user: loggedDev });

    return users;
  }
}

export default GetAvailableDevsUseCase;
