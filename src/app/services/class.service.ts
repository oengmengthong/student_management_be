import { ClassRepository } from '../repositories/class.repository';
import { IClass } from '../models/class.model';

export class ClassService {
  private classRepo = new ClassRepository();

  async createClass(data: Partial<IClass>): Promise<IClass> {
    return this.classRepo.createClass(data);
  }

  async getAllClasses(): Promise<IClass[]> {
    return this.classRepo.findAllClasses();
  }
}