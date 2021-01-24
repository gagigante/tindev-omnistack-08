import mongoose from 'mongoose';

class Database {
  constructor() {
    mongoose.connect(process.env.MONGO_URL, {
      dbName: 'tindev',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }
}

export default new Database();
