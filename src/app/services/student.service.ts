import { StudentRepository } from '../repositories/student.repository';
import { IStudent } from '../models/student.model';

export class StudentService {
  private studentRepo = new StudentRepository();

  async createStudent(data: Partial<IStudent>): Promise<IStudent> {
    return this.studentRepo.createStudent(data);
  }

  async getStudentsByClass(classId: string): Promise<IStudent[]> {
    return this.studentRepo.findStudentsByClass(classId);
  }
}