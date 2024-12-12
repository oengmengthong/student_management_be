import { Router, Request, Response } from 'express';
import { createStudent, getStudentsByClass } from '../../app/controllers/student.controller';

const router = Router();

const createStudentHandler = async (req: Request, res: Response) => {
  try {
    await createStudent(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
};

const getStudentsByClassHandler = async (req: Request, res: Response) => {
  try {
    await getStudentsByClass(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
};

router.post('/', createStudentHandler);
router.get('/class/:classId', getStudentsByClassHandler);

export default router;