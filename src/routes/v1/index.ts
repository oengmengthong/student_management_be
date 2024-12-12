import { Router } from "express";
import adminRoutes from "./adminRoutes";
import studentRoutes from "./studentRoutes";
import classRoutes from "./classRoutes";
import { authenticate } from "../../app/middlewares/auth";

const router = Router();

// Public route for admin login
router.use("/admin/login", adminRoutes); // This should include only the login route

// Protected routes (authentication required)
router.use("/admin", authenticate, adminRoutes);
router.use("/students", authenticate, studentRoutes);
router.use("/classes", authenticate, classRoutes);

export default router;
