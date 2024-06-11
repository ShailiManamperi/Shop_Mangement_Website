import express from "express";
import {createUser, deleteUser, getAllUser, getSingleUser, updateUser} from "../controllers/userController.js";

const router = express.Router()

// create new user
router.post('/',createUser)

// update user
router.put('/:id',updateUser)

// delete user
router.delete('/:id',deleteUser)

// getSingle user
router.get('/:id',getSingleUser)

// create new user
router.get('/',getAllUser)


export default router;