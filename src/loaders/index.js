import expressLoader from '#/loaders/express.ts';

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
};
