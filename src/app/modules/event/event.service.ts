import AppError from "../../error/AppError";
import httpStatus from "http-status";
import { IEvent } from "./event.interface";
import { categorizeEvent } from "./event.utils";
import { Event } from "./event.module";

export const createEventIntoDb = async (
  payload: Partial<IEvent>
): Promise<IEvent> => {
  const combinedText = `${payload.title ?? ""} ${payload.notes ?? ""}`;
  const category = categorizeEvent(combinedText);

  const newEvent = await Event.create({
    ...payload,
    category,
  });

  return newEvent;
};

export const getAllEventsIntoDb = async (): Promise<IEvent[]> => {
  return await Event.find().sort({ date: 1, time: 1 });
};

export const archiveEventIntoDb = async (id: string): Promise<IEvent> => {
  const event = await Event.findById(id);
  if (!event) {
    throw new AppError(httpStatus.NOT_FOUND, "Event not found");
  }

  event.archived = true;
  await event.save();

  return event;
};

export const deleteEventIntoDb = async (id: string): Promise<void> => {
  const result = await Event.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Event not found");
  }
};

export const EventServices = {
  createEventIntoDb,
  getAllEventsIntoDb,
  archiveEventIntoDb,
  deleteEventIntoDb,
};
