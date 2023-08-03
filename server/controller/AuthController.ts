import {Response, Request, NextFunction} from 'express'
import { StatusCodes } from "http-status-codes";
import {userDto} from "../dtos/user.dto";
import AuthService from "../service/AuthService";

class AuthController{
  async login( req:Request, res:Response, next:NextFunction ){
    try{
      const userData=req.body as userDto
      const user= await AuthService.login(userData)
      return res.status(StatusCodes.CREATED).json(user)
    }
    catch (error){
      next(error)
    }
  }
}

export default new AuthController()
