import { NextFunction, Request, Response } from "express";
import AppError from "../error/AppError";
import config from "../config";

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack: config.node_env === "development" ? err.stack : undefined,
  });
};
