import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-practice",
  apiKey: process.env.API_KEY,
});
