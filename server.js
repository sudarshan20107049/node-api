import express from 'express';
import { config } from 'dotenv';
import { set} from 'mongoose';
import cors from 'cors';
import connectDb from './database/index.js';
import rootRouter from './routes/product.route.js';
const app = express()
config();
app.use(express.json())
app.use(cors())
app.use(rootRouter)
set('strictQuery',false)
connectDb().then(()=>{
    app.listen('4000',async ()=>{
        console.log("port work ")
    })
})