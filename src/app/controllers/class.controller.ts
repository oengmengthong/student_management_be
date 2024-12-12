import { Request, Response } from 'express';
import { ClassService } from '../services/class.service';
import { classSchema } from '../validators/class.validator';
import { sendSuccess, sendError } from '../../utils/responseHelper';

const classService = new ClassService();

export const createClass = async (req: Request, res: Response): Promise<Response> => {
  try {
    const validatedData = classSchema.parse(req.body); // Validate the input data
    const newClass = await classService.createClass(validatedData);
    return sendSuccess(res, newClass, 'Class created successfully');
  } catch (error) {
    return sendError(res, (error as any).message || 'Failed to create class');
  }
};

export const getAllClasses = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const classes = await classService.getAllClasses();
    return sendSuccess(res, classes, 'Classes fetched successfully');
  } catch (error) {
    return sendError(res, (error as Error).message || 'Failed to fetch classes');
  }
};