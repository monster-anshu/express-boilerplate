import { HttpResponse } from '@/utils/response';
import type { Handler } from 'express';

export default class IndexController {
  public index: Handler = (req, res, next) => {
    try {
      res.status(201).json(new HttpResponse('Running', 'OK', 201));
    } catch (error) {
      next(error);
    }
  };
}
