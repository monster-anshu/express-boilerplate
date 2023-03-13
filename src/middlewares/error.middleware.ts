import type { NextFunction, Request, Response } from 'express';
import { HttpException, HttpResponse } from '@utils/response';
import { logger } from '@utils/logger';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    const data = error.data || null;
    const isSuccess = error.isSuccess || false;
    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    res.status(status).json(new HttpResponse(data, message, status, isSuccess));
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
