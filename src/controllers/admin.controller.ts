import { HttpResponse } from '@/utils/response';
import AdminService from '@services/admin.service';
import validateZod from '@utils/zod';
import AdminValidation from '@validations/admin.validation';
import type { Handler } from 'express';

export default class AdminController {
  private adminService = new AdminService();
  private adminValidation = new AdminValidation();

  public login: Handler = async (req, res, next) => {
    try {
      const { body } = req;
      const { email, password } = validateZod(body, this.adminValidation.login);
      const token = await this.adminService.login(email, password);
      res.cookie('token', token);
      res.json(new HttpResponse(token));
    } catch (error) {
      next(error);
    }
  };
}
