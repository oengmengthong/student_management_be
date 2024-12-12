import { StudentModel, IStudent } from '../models/student.model';

export class StudentRepository {
  async createStudent(data: Partial<IStudent>): Promise<IStudent> {
    return StudentModel.create(data);
  }

  async findStudentsByClass(classId: string): Promise<IStudent[]> {
    return StudentModel.find({ classId });
  }
}