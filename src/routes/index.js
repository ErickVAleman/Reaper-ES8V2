import { Router } from 'express';
const __ = Router();

__.get('/',(req, res) => res.status(200).json({status: 200, message: 'Welcome to Reaper-ES8'}))

export default __