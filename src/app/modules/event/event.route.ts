import express from "express";
import validateRequest from "../../middleware/validateRequest";
import {
  archiveEvent,
  createEvent,
  deleteEvent,
  getEvents,
} from "./event.controller";
import { eventCreateZodSchema } from "./event.validation";

const router = express.Router();

router.post(
  "/",
  //  validateRequest(eventCreateZodSchema),
  createEvent
);
router.get("/", getEvents);
router.put("/:id", archiveEvent);
router.delete("/:id", deleteEvent);

export const EventRoutes = router;
