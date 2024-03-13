import express from 'express'
import morgan from 'morgan'
import paymentRoutes from './routes/payment.routers.js'
import {PORT} from './config.js'


const app = express();

app.use(morgan('dev'))

app.use(paymentRoutes);

app.listen(PORT)
console.log('server on port', PORT)

