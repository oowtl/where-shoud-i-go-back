import morgan from 'morgan';

export default async ({ app }) => {
  middleware;
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
  return app;
};
