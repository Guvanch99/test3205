import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors  from 'cors'
import authRouter from './routes/authRouter'
import notFoundMiddleware from './middleware/notFound'
import errorHandlerMiddleware from './middleware/errorHandler'

dotenv.config();

const index: Express = express();

index.use(cors())

index.use(express.urlencoded({ extended: true }))
index.use(express.json())

index.use('/api/v1/auth',authRouter)
index.use(notFoundMiddleware)
index.use(errorHandlerMiddleware)

const port = process.env.PORT;
function start(){
  index.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

start()
