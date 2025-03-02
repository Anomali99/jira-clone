import { z } from "zod";

const loginSchema = z.object({
  email: z.string().trim().min(1, "Required").email(),
  password: z.string().min(1, "Required").min(8, "Minimum 8 characters"),
});

const registerSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.string().trim().min(1, "Required").email(),
  password: z.string().min(1, "Required").min(8, "Minimum 8 characters"),
});

export { loginSchema, registerSchema };
