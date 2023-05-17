import express from 'express'
import { userControllers } from "../controllers/pageControllers";
import {body} from 'express-validator'
import verifyToken from '../middleware/tokenVerification';
import { postController } from '../controllers/postController';


const rout:express.Router = express.Router();

rout.post('/users', userControllers.UserPost);


//for getting all users in table
rout.get('/users',  userControllers.ShowUsers)


//for getting specific user in table
rout.get('/users/:id',userControllers.FindById)

//for updating data
rout.put('/users/:id',userControllers.UpdateUser)

//for deleting user
rout.delete('/users/:id',userControllers.DeleteUser)

rout.post('/login',[
    body('email').not().isEmpty().withMessage('email is Required'),
    body('password').not().isEmpty().withMessage('password is Required')
],userControllers.Login)


rout.post('/blogPosts',verifyToken,postController.addPost)
rout.get('/blogPosts',verifyToken,postController.getPost)
rout.put('/blogPosts/:id',verifyToken,postController.updatePost)
rout.delete('/blogPosts/:id',verifyToken,postController.deletePost)







export default rout;