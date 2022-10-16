import express from 'express'
import { getAllUsers, getUser } from '../controllers/users.js';
import { isAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//login
router.get("/checkauth", verifyToken, (req, res, next) => {
    res.send('You are Logged In!')
});
//login and can delete acount

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send('You are Logged In and You can delete account!')
})


//search by id
router.get('/:id', verifyUser, getUser);

//Admin, can see all user
router.get('/', isAdmin, getAllUsers);

export default router;