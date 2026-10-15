import { z } from "zod";
import { SkillCategory, SkillLevel } from "../generated/prisma/enums.js";

export const createSkillSchema = z.object({
  name: z.string().trim().min(1),
  category: z.enum(SkillCategory),
  level: z.enum(SkillLevel)
});

export type CreateSkillInput = z.infer<typeof createSkillSchema>;