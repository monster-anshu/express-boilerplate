import { Router } from 'express';
import type { Routes } from '@interfaces/routes.interface';
import AdminController from '@controllers/admin.controller';

export default class AdminRoute implements Routes {
  public path = '/admin';
  public router = Router();

  private adminController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path + '/login', this.adminController.login);
  }
}
