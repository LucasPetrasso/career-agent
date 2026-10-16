import { z } from "zod";

export const createCareerProfileSchema = z.object({
  name: z.string().trim().min(1),
  professionalTitle: z.string().trim().min(1),
  bio: z.string().trim().optional(),
  location: z.string().trim().optional(),
  linkedinUrl: z.url().optional(),
  githubUrl: z.url().optional(),
  portfolioUrl: z.url().optional()
});

export const updateCareerProfileSchema =
  createCareerProfileSchema.partial();

export type UpdateCareerProfileInput = z.infer<
  typeof updateCareerProfileSchema
>;

export type CreateCareerProfileInput = z.infer<
  typeof createCareerProfileSchema
>;