import Dev from '../database/schemas/Dev';

const DevRepository = {
  async findByUsername({ username }) {
    const user = await Dev.findOne({
      user: username,
    });

    return user;
  },

  async createDev({ name, username, bio, avatar }) {
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    return dev;
  },
};

export default DevRepository;
