import DevRepository from '../repositories/DevRepository';

const getAvailableUsersUseCase = {
  async execute({ userId }) {
    const loggedDev = await DevRepository.findById({ userId });

    const users = await DevRepository.findAvailableDevs({ user: loggedDev });

    return users;
  },
};

export default getAvailableUsersUseCase;
