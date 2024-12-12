import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
}

interface AuthenticatedRequest extends Request {
  user?: DecodedToken;
}

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Access Denied" });
    return; // End the function execution
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Access Denied" });
    return; // End the function execution
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    ) as DecodedToken;

    req.user = decoded; // Attach decoded token to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(403).json({ message: "Invalid Token" });
  }
};