import { Router } from 'express';
import AuthController from "../controller/AuthController";

const authRouter: Router = Router();

authRouter.post('/login', AuthController.login)


export default authRouter
