import express from 'express'
import paymentRoutes from './routes/payment.routers.js'
import {PORT} from './config.js'
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'))

app.use(paymentRoutes);

app.listen(PORT)
console.log('server on port', PORT)

