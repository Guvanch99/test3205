import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {

  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, please try again later',
  };


  return res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandlerMiddleware;
