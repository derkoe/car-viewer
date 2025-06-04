import { AzureOpenAI } from "openai";
import type { Vehicle } from "./types";
import { AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY } from "astro:env/server";

export async function summarize(vehicle: Vehicle): Promise<string> {
  const apiVersion = "2025-01-01-preview";
  const deployment = "gpt-4.1-nano"; // This must match your deployment name

  const client = new AzureOpenAI({
    endpoint: AZURE_OPENAI_ENDPOINT,
    apiKey: AZURE_OPENAI_API_KEY,
    apiVersion,
    deployment,
  });

  const result = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You generate a SEO optimized short description (max 1000 chars) for vehicle data. You can use emojis.",
      },
      {
        role: "user",
        content: JSON.stringify(vehicle),
      },
    ],
    max_tokens: 800,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null,
  });

  return result.choices[0].message.content || "No summary available.";
}
