import {Router} from 'express';
import {createOrder} from '../routes/controllers/paymetn.controller.js';

const router = Router();

router.get('/create-order', createOrder); //http://localhost:4000/create-order

router.get('/success', (req, res) => res.send('creating order'));

router.get('/webhook', (req, res) => res.send('creating order'));

export default router;