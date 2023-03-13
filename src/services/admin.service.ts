import { HttpException } from '@utils/response';

export default class AdminService {
  public async login(email: string, password: string) {
    if (email !== 'ADMIN@ADMIN.COM' || password !== 'ADMIN_PASSWORD') {
      throw new HttpException(401, 'Email or Password is not correct');
    }
    return 'token_for_admin';
  }
}
