import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "ku5zoyb0",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
