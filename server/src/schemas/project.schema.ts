
import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().trim().optional(),
  repositoryUrl: z.url().optional(),
  liveUrl: z.url().optional(),
  featured: z.boolean().default(false),
  skillIds: z.array(z.uuid()).default([])
});

export const updateProjectSchema = createProjectSchema
  .partial()
  .extend({
    skillIds: z.array(z.uuid()).optional()
  });

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
