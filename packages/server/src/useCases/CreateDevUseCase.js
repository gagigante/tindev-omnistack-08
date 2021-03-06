import axios from 'axios';

import DevRepository from '../repositories/DevRepository';

class CreateDevUseCase {
  static async execute({ username }) {
    const userExists = await DevRepository.findByUsername({ username });

    if (userExists) return userExists;

    const githubProfile = await axios.get(
      `${process.env.GITHUB_API_URL}/users/${username}`,
    );

    // if (!githubProfile.data) {
    //   throw new Error('Github profile was not found');
    // }

    const { name, bio, avatar_url: avatar } = githubProfile.data;

    const dev = await DevRepository.createDev({
      name,
      username,
      bio,
      avatar,
    });

    return dev;
  }
}

export default CreateDevUseCase;
