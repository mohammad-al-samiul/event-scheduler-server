import { NextFunction, Request, Response } from "express";

import { ZodTypeAny } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequest = (schema: ZodTypeAny) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({ body: req.body });
    next();
  });

export default validateRequest;
