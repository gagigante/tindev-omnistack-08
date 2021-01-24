import axios from 'axios';

import DevRepository from '../repositories/DevRepository';

const createDevUseCase = {
  async execute({ username }) {
    const userExists = await DevRepository.findByUsername({ username });

    if (userExists) return userExists;

    const githubProfile = await axios.get(
      `${process.env.GITHUB_API_URL}/users/${username}`,
    );

    const { name, bio, avatar_url: avatar } = githubProfile.data;

    const dev = await DevRepository.createDev({
      name,
      username,
      bio,
      avatar,
    });

    return dev;
  },
};

export default createDevUseCase;
