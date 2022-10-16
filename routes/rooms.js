import express from 'express'
import { createRoom, getAllRooms, getRoom, updateRoom } from '../controllers/rooms.js';
import { isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//For add new rooms, only admin can add a new room
router.post('/:hotelId', isAdmin, createRoom); //only als admin login can you add hotels

//Update Room
router.put("/availability/:id", updateRoom);

//For get room by id
router.get('/:id', getRoom);

//For get all rooms
router.get('/', getAllRooms);

export default router;