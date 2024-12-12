import { connectDB } from '../connection'; // Adjust the path as necessary
import { AdminRepository } from '../../app/repositories/admin.repository';
import dotenv from 'dotenv';

dotenv.config();

const adminSeeder = async () => {
  try {
    await connectDB(); // Ensure the database is connected
    const adminRepo = new AdminRepository();
    await adminRepo.createAdmin('admin', 'password123');
    console.log('Admin user seeded');
  } catch (error) {
    console.error('Error seeding admin user:', error);
  } finally {
    process.exit();
  }
};

adminSeeder();