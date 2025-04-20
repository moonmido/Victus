const PromptAi = {
    CALCULAT_PROMPT: `Calculate daily caloric and macronutrient needs based on:
- weight 
- height 
- age (in years)
- gender (male or female)
- goal (lose, maintain, gain)
- Activity (Sendentary, Light, Moderate, Active, Extra Active)

Return only JSON in this schema:
{
  "energy": <number>,     // energy consumption
"water": <number>,      // Daily water intake in liters (e.g. 2.5)
  "protein": <number>,         // Protein
  "carbs": <number>,          // Carbs
  "fat": <number>,            // fat
}`
  };
  
  export default PromptAi;
  