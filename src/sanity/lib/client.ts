// lib/sanityClient.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "wmpz3y0l", 
  dataset: "production", 
  apiVersion: "2023-01-01", 
  useCdn: false,
});
