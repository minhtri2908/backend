import express from 'express'
import { byCity, byType, createHotel, getAllHotels, getHotel, getHotelsRoom } from '../controllers/hotels.js';
import { isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//For add new hotel only admin can add a new hotel 
router.post('/', isAdmin, createHotel);

//For get hotel by id
router.get('/find/:id', getHotel);

//For get all hotels
router.get('/', getAllHotels);
router.get('/bycity', byCity);
router.get('/bytype', byType);
router.get('/room/:id', getHotelsRoom);


export default router;