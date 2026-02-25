// auth.schema.ts

import { z } from 'zod';

export const LoginUserSchema = z.object({
  login: z
    .string()
    .min(1, 'Login jest wymagany')
    .trim()
    .regex(/^[A-Za-z0-9-]+$/, 'Login może zawierać tylko litery, cyfry oraz znak "-"')
    .transform((val: any) => val.toLowerCase()),
  password: z.string().min(1, 'Hasło jest wymagane'),
});
