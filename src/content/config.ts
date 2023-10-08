// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const skillCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.object({
      short: z.string(),
      long: z.string(),
    }),
    previewImgUrl: z.string(),
  }),
});

const workExperienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const indexCollection = defineCollection({
  type: 'content',
  schema: z.object({
    intro: z.string(),
  }),
});

const sidebarCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    contact: z.object({
      city: z.string(),
      country: z.string(),
      xing: z.string().url(),
      linkedin: z.string().url(),
      github: z.string().url(),
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  index: indexCollection,
  skills: skillCollection,
  workExperience: workExperienceCollection,
  sidebar: sidebarCollection,
};
