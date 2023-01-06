import type { Handler } from 'express';

export default class IndexController {
  public index: Handler = (req, res, next) => {
    try {
      res.status(201).json('OK');
    } catch (error) {
      next(error);
    }
  };
}
