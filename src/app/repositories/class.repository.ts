import { ClassModel, IClass } from '../models/class.model';

export class ClassRepository {
  async createClass(data: Partial<IClass>): Promise<IClass> {
    return ClassModel.create(data);
  }

  async findAllClasses(): Promise<IClass[]> {
    return ClassModel.find();
  }
}