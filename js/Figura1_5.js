// Figura 1.5 - Código em JavaScript (Node.js) utilizando a biblioteca da API com o endpoint “completions”.
  
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

async function executarPrompt() {
   const resposta = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Qual é a capital do Brasil?",
      temperature: 0.7,
      max_tokens: 100
   });
   console.log(resposta.data.choices[0].text.trim());
   console.log(resposta.data.usage.total_tokens);
}

executarPrompt();
