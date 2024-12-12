import { z } from 'zod';

export const studentSchema = z.object({
  name: z.string().nonempty(),
  age: z.number().int().positive(),
  classId: z.string().nonempty(),
});