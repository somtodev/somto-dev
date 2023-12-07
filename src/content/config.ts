import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((date) => new Date(date)),
    keywords: z.string().default("somtochukwu, blog"),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
