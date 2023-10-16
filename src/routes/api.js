import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router()

// get all user
router.get('/', userController.index)
// get single user
router.get('/:id', userController.getSingleUser)
// create user
router.post('/', userController.createUser)
// update user
router.put('/:id', userController.updateUser)
// delete a user
router.delete('/:id', userController.deleteUser)

export default router