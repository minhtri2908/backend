import User from "../models/User.js";

//find by id
export const getUser = async (req, res, next) => {
    try {

        const user = await User.findById(req.params.id);
        res.status(200).json(user);

    } catch(err) {

        next(err);

    }
};

//find all user
export const getAllUsers = async (req, res, next) => {
    try {

        const users = await User.find();
        res.status(200).json(users);

    } catch(err) {
        next(err);
    }
};