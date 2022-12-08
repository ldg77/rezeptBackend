import mongoose from "mongoose";
import express from 'express'
import  *as dotenv from 'dotenv'
import morgan from "morgan";
import cors from 'cors'
import recipeRouter from './routes/recipeRoute.js'
dotenv.config()
const PORT =process.env.PORT || 4001;

const app =express()
const URL =process.env.MONGODB || 'mongodb://locaalhost:27017/recipe'
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

mongoose.connect(URL).then(()=>console.log("mit mongoDB ")).catch((err)=>console.log(err))


app.use('/',recipeRouter)

app.listen(PORT,()=>{
        console.log(`Server läuft http://localhost:${PORT}`);
})