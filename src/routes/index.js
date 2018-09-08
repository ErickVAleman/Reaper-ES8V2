import { Router } from 'express';
import { todosArticulosController, Articulos } from '../controllers';
const __ = Router();

__.get('/',(req, res) => res.status(200).json({status: 200, message: 'Welcome to Reaper-ES8'}))
__.get('/ormarticulos', (req, res) => todosArticulosController(req, res));
__.get('/noormarticulos', (req, res) => Articulos(req, res));
export default __
