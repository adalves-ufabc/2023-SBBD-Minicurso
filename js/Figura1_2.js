// Figura 1.2 - Trecho de código em JavaScript (Node.js) para gerar uma resposta de texto

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

async function executarPrompt() {
    const resposta = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "O Brasil é um país"
    });

    console.log(resposta.data.choices[0].text);
}

executarPrompt();