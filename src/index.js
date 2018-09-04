import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import helmet from 'helmet';
import morgan from 'morgan';
import vhost from 'vhost';

const app = express();
const { NODE_ENV } = process.env
let expire = Date(Date.now() + 60*60*1000) // 1 hora
// app.use
app.set('trust proxy', 1)
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cookieSession({
  name: 'session',
  keys: ['reaper','v2'],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'localhost',
    path:'api/v1/',
    expires: expire
  }
}))
app.use(cookieParser())
app.use(compression())

// Routes
import _index from './routes';

// Rutas del API
app.use('/api/v1', _index)

/**
 * Errores 404 y 500
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type("application/json");
  res.status(404);
  res.json({error: 404, message: 'Not Found'});
});
  
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type("application/json");
  res.status(500);
  res.json({error: 500, message: 'Error in Server'});
});

export default app
