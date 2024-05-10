import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const connectMongo = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error('db initial connect error', error);
    process.exit(1);
  }
};

export default async () => {
  mongoose.connection.on('connected', () => {
    console.log('db connected');
  });

  mongoose.connection.on('disconnect', (error) => {
    console.error('db disconnect', error);
    connectMongo();
  });

  connectMongo();
};
