const PromptAi = {
    CALCULAT_PROMPT: `Calculate daily caloric and protein needs according to the goal ( gain weight, loose weight ...ect).
  
  Input:
  - weight 
  - height 
  - age (years)
  - gender (male or female)
  - goal (lose, maintain, gain)
    
  Return only JSON in this schema:
  { "calories": <number>, "proteins": <number> , "carbs":<number>}
  

  Example input:
  weight: 80
  height: 180
  age: 28
  gender: male
  goal: gain`
  };
  
  export default PromptAi;
  