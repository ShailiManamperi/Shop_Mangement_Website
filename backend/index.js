import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';

dotenv.config()

const app = express()
const port = process.env.PORT || 8000



/*//for testing
app.get('/',(req,res)=>{
    res.send("api working...");
})*/

//database connection
mongoose.set('strictQuery',false);
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("MongoDb database connected..");
    }catch (err){
        console.log("MongoDb database not connected..");
        console.log(err)
    }
}

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/users',userRoute)
app.use('/auth',authRoute)

app.listen(port, ()=>{
    connect();
    console.log('server listening on port...',port)
})