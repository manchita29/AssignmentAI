import { z } from "zod";


export const incidentSchema = z.object({
  title: z.string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters"),
  description: z.string()
    .min(20, "Description must be at least 20 characters")
    .max(500, "Description must be less than 500 characters"),
  severity: z.enum(["Low", "Medium", "High"] as const),
});

export type IncidentFormData = z.infer<typeof incidentSchema>;