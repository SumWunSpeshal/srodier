// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const skillCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
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

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  index: indexCollection,
  skills: skillCollection,
  workExperience: workExperienceCollection,
};
