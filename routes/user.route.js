import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router()
 userRouter.route('/users').get(getUsers).post(createUser);
 userRouter.route('/users/:id').get().put().delete();

 export default userRouter;