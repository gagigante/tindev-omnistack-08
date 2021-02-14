import mongoose from 'mongoose';

class Database {
  constructor() {
    try {
      mongoose.connect(process.env.MONGO_URL, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }
}

export default new Database();
