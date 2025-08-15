import { defineCollection, defineContentConfig } from "@nuxt/content";

const docsSource = {
  include: "docs/**/*",
  exclude: ["docs/**/*.json"],
  prefix: "/docs",
};

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: "page",
      source: docsSource,
    }),
  },
});
