import { z } from 'zod';

export const classSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().optional(),
});