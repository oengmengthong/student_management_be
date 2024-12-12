import { Response } from 'express';

export const sendSuccess = (res: Response, data: any, message: string): Response => {
  return res.status(200).json({ success: true, message, data });
};

export const sendError = (res: Response, message: string, statusCode: number = 500): Response => {
  return res.status(statusCode).json({ success: false, message });
};