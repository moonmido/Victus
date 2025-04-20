import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:"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",
});

export const CalculatCalories = async (PROMPT) => {
  return await openai.chat.completions.create({
    model: "openai/gpt-3.5-turbo",
    messages: [
      { role: "user", content: PROMPT }
    ]
  });
};
