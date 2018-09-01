import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import vhost from 'vhost';
const app = express();
const { NODE_ENV } = process.env


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

/**
 * Routes
 */
import _index from '../routes';

/**
 * index de rutas del API
 */
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