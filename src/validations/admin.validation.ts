import { z } from 'zod';

export default class AdminValidation {
  readonly login = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
}
