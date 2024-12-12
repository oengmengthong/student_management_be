import { Request, Response } from 'express';
import { AdminService } from '../services/admin.service';

const adminService = new AdminService();

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const token = await adminService.login(username, password);
    if (!token) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};