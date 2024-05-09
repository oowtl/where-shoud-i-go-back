import { Express } from 'express';
import morgan from 'morgan';

export default async ({ app }: { app: Express.Application }) => {
  // middleware
  // app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
  return app;
};
