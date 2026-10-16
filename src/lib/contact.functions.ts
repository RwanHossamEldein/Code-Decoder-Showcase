import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  type: z.string().trim().min(1).max(50),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(), // honeypot
  elapsedMs: z.number().min(2000), // too-fast submits are treated as bots
  hasAttachment: z.boolean(),
});

/**
 * Delivery target: supportcodedecoder@gmail.com.
 * INTEGRATION REQUIRED: no email service is configured yet. Once one is connected
 * (server-side secret), send the message here. Until then this returns
 * `not_configured` so the UI never shows a fake success.
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async () => {
    return { ok: false as const, reason: "not_configured" as const };
  });
