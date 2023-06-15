import { Router } from "express";
import productRouter from "./product.route";
import userRouter from "./user.route.js";

const rootRouter = Router();
rootRouter.route('/').get((req,res)=>{
      res.json("perfectly Work")
})

rootRouter.use(productRouter)
rootRouter.use(userRouter)

export default rootRouter;