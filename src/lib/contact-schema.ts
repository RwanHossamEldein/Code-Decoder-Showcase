import { z } from "zod";

export const feedbackTypes = ["inquiry", "feedback", "bug", "feature", "collaboration"] as const;
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  type: z.enum(feedbackTypes),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(),
  elapsedMs: z.number().finite().min(2000).max(86400000),
});