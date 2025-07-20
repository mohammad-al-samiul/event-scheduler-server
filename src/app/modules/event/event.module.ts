import { model, Schema } from "mongoose";
import { IEvent } from "./event.interface";
import httpStatus from "http-status";
import AppError from "../../error/AppError";

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    archived: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ["Work", "Personal", "Other"],
      default: "Other",
    },
  },
  {
    timestamps: true,
  }
);

// 🧠 Pre-save validation logic (example: check valid date/time format)
eventSchema.pre("save", function (next) {
  const dateTime = new Date(`${this.date}T${this.time}`);
  if (isNaN(dateTime.getTime())) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid date or time format");
  }

  if (!this.title || this.title.trim() === "") {
    throw new AppError(httpStatus.BAD_REQUEST, "Title is required");
  }

  next();
});

export const Event = model<IEvent>("Event", eventSchema);
