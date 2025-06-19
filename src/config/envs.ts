import { z } from "zod";

const EnvSchema = z.object({
  RESEND_API_KEY: z.string(),
});

export const ENVS = EnvSchema.parse(process.env);