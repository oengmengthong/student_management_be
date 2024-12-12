import { Request, Response } from 'express';
import { StudentService } from '../services/student.service';
import { studentSchema } from '../validators/student.validator';
import { sendSuccess, sendError } from '../../utils/responseHelper';

const studentService = new StudentService();

export const createStudent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = {
      ...req.body,
      age: Number(req.body.age),
    };

    const validatedData = studentSchema.parse(data); // Validate the input data
    const newStudent = await studentService.createStudent(validatedData);
    return sendSuccess(res, newStudent, 'Student created successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to create student';
    return sendError(res, errorMessage);
  }
};

export const getStudentsByClass = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { classId } = req.params;

    if (!classId) {
      return sendError(res, 'Class ID is required', 400);
    }

    const students = await studentService.getStudentsByClass(classId);
    return sendSuccess(res, students, 'Students fetched successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch students';
    return sendError(res, errorMessage);
  }
};