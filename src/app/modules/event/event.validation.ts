import { z } from "zod";

export const eventCreateZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    date: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" }),
    time: z.string(),
    notes: z.string().optional(),
  }),
});
