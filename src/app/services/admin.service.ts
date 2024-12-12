import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AdminRepository } from '../repositories/admin.repository';

export class AdminService {
  private adminRepo = new AdminRepository();

  async login(username: string, password: string): Promise<string | null> {
    const admin = await this.adminRepo.findByUsername(username);
    if (!admin) return null;

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return null;

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    return token;
  }

  async registerAdmin(username: string, password: string) {
    return this.adminRepo.createAdmin(username, password);
  }
}