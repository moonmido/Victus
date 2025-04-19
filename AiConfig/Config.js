import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:OPENROUTER_API_GEMINI,
});

export const CalculatCalories = async (PROMPT) => {
  return await openai.chat.completions.create({
    model: "openai/gpt-3.5-turbo",
    messages: [
      { role: "user", content: PROMPT }
    ]
  });
};
