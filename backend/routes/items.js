import {createItem, deleteItem, getAllItem, getSingleItem, updateItem} from "../controllers/itemController.js";
import express from "express";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";

const router = express.Router()

// create new item
router.post('/', createItem)

// update item
router.put('/:id',  updateItem)

// delete item
router.delete('/:id', deleteItem)

// getSingle item
router.get('/:id', getSingleItem)

// create new item
router.get('/', getAllItem)


export default router;