import cors from 'cors';
import express from 'express';
import session from 'express-session';

import { connect } from './mongo';
import { router } from './routes';
import { ONE_HOUR } from './utils/times';

const app = express();

app.use(
  cors({
    origin: process.env.AXIOS_BASE_URL,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: ONE_HOUR },
  })
);
app.use(express.json());
app.use(router);

connect();

app.listen(8080);
