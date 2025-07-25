import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api not found",
    error: "",
  });
};

export default notFound;
