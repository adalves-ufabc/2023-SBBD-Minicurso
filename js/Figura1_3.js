// Figura 1.3 - Código em JavaScript (Node.js) para fazer uma requisição HTTP utilizando o endpoint “completions”

const axios = require('axios');

const chave_api = process.env.OPENAI_API_KEY;

const cliente = axios.create({
   headers: { 'Authorization': 'Bearer ' + chave_api }
});

const modelo = "text-davinci-003"
const endpoint = "https://api.openai.com/v1/engines/" + modelo + "/completions"

const parametros  = {
   "prompt": "Qual é a capital do Brasil?",
    "temperature": 0.7,
    "max_tokens": 100  
}

cliente.post(endpoint, parametros)
   .then(resposta => {
      console.log(resposta.data.choices[0].text.trim());
}).catch(erro => {
  console.log('Erro ao chamar a API:', erro);
});