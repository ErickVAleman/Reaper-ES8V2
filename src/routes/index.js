import { Router } from 'express';
import { todosArticulosController } from '../controllers';
const __ = Router();

__.get('/',(req, res) => res.status(200).json({status: 200, message: 'Welcome to Reaper-ES8'}))
__.get('/todoarticulos', (req, res) => todosArticulosController(req, res));
export default __
