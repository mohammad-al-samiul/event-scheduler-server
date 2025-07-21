import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { EventServices } from "./event.service";

export const createEvent = catchAsync(async (req: Request, res: Response) => {
  const result = await EventServices.createEventIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Event created successfully",
    data: result,
  });
});

export const getEvents = catchAsync(async (req: Request, res: Response) => {
  const result = await EventServices.getAllEventsIntoDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Events retrieved successfully",
    data: result,
  });
});

export const archiveEvent = catchAsync(async (req: Request, res: Response) => {
  const result = await EventServices.archiveEventIntoDb(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event archived successfully",
    data: result,
  });
});

export const deleteEvent = catchAsync(async (req: Request, res: Response) => {
  await EventServices.deleteEventIntoDb(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event deleted successfully",
    data: null,
  });
});
