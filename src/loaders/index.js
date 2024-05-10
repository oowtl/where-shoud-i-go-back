import expressLoader from '#app/loaders/express.js';
import mongooseLoader from '#app/loaders/mongoose.js';

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  await mongooseLoader();
};
