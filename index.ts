import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';

const app: Express = express();

app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
