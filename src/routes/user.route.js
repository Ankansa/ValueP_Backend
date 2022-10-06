import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to Add new name
router.post('', newUserValidator, userController.newUser);

//route to get all name
router.get('', userController.getAllUsers);


//route to update a single name by their user id
router.put('/:_id', userController.updateUser);

//route to delete a single name by their user id
router.delete('/:_id', userController.deleteUser);

export default router;
