import { AdminModel, IAdmin } from '../models/admin.model';
import bcrypt from 'bcrypt';

export class AdminRepository {
  async createAdmin(username: string, password: string): Promise<IAdmin> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return AdminModel.create({ username, password: hashedPassword });
  }

  async findByUsername(username: string): Promise<IAdmin | null> {
    return AdminModel.findOne({ username });
  }
}