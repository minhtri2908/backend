
import express from 'express'

const router = express.Router();

import { newBooking } from '../controllers/booking.js';


router.post('/booking' , newBooking)

export default router;