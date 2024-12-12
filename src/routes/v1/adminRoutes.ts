import { Router, Request, Response } from 'express';
import { login } from '../../app/controllers/admin.controller';

const router = Router();

const loginHandler = async (req: Request, res: Response) => {
  try {
    await login(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
};

router.post('/login', loginHandler);

export default router;