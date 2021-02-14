import Dev from '../database/schemas/Dev';

class DevRepository {
  static async findById({ userId }) {
    const user = await Dev.findById(userId);

    return user;
  }

  static async findByUsername({ username }) {
    const user = await Dev.findOne({
      user: username,
    });

    return user;
  }

  static async findAvailableDevs({ user }) {
    const users = await Dev.find({
      $and: [
        { _id: { $ne: user._id } },
        { _id: { $nin: user.likes } },
        { _id: { $nin: user.dislikes } },
      ],
    });

    return users;
  }

  static async createDev({ name, username, bio, avatar }) {
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    return dev;
  }
}

export default DevRepository;
