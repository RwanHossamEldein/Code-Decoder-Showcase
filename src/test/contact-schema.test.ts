import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = { name: "Visitor", email: "visitor@example.com", type: "feedback", subject: "An idea", message: "Please add more examples.", website: "", elapsedMs: 2500 };
describe("feedback validation", () => {
  it("accepts a complete visitor feedback submission", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it("rejects invalid email addresses", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it("rejects unknown message types", () => {
    expect(contactSchema.safeParse({ ...valid, type: "other" }).success).toBe(false);
  });
  it("rejects bot honeypot submissions", () => {
    expect(contactSchema.safeParse({ ...valid, website: "spam" }).success).toBe(false);
  });
  it("rejects messages shorter than ten characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "123456789" }).success).toBe(false);
  });
});