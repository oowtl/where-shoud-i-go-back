import 'dotenv/config';
import express from 'express';

import loaders from '#app/loaders/index.js';

async function initServer() {
  const app = express();

  await loaders({ expressApp: app });

  app.set('port', process.env.PORT || 3000);

  app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
  });

  app.get('/', (req, res) => {
    res.send('Hello Express');
  });
}

initServer();
