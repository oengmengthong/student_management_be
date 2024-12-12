import { Router, Request, Response } from 'express';
import { createClass, getAllClasses } from '../../app/controllers/class.controller';

const router = Router();

const createClassHandler = async (req: Request, res: Response) => {
  try {
    await createClass(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
};

const getAllClassesHandler = async (req: Request, res: Response) => {
  try {
    await getAllClasses(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
};

router.post('/', createClassHandler);
router.get('/', getAllClassesHandler);

export default router;