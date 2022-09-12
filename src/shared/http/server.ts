import "reflect-metadata";
import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import cors from "cors"
import routes from "./routes"
import AppError from '@shared/errors/AppError';
import "@shared/typeorm";

const app = express()
app.use(cors());
app.use(express.json())
app.use(routes)

app.use((error:Error, request:Request, response: Response, next: NextFunction) => {
if(error instanceof AppError){
  return response.status(error.statusCode).json({
    status: "error",
    message: error.message
  })
}
return response.status(500).json({
  status: "error",
  message: "internal server error",
})
})

app.listen(3000, () => {
    console.log("🚀🚀✨✨ Servidor on na porta http://localhost:3000/ 💡✨✨ 🚀 ")
})
