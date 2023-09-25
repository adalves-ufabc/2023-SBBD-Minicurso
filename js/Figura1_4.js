// Figura 1.4 - Código em JavaScript (Node.js) para fazer uma requisição HTTP utilizando o endpoint “chat completions”.

const axios = require('axios');

const chave_api = process.env.OPENAI_API_KEY;

const cliente = axios.create({
   headers: { 'Authorization': 'Bearer ' + chave_api }
});

const endpoint = "https://api.openai.com/v1/chat/completions"

const msg_sistema = 'Você é um assistente que analisa sentimentos de avaliações de produtos'
const msg_usuario = "Aqui está uma avaliação de um produto: 'Este produto é incrível!"
const msg_assistente = "Classifique o sentimento retornando apenas 'Positivo' ou 'Negativo'"

const parametros  = {
   "model": "gpt-3.5-turbo-0613", 
   "messages": [
      {"role": "system", "content": msg_sistema},
      {"role": "user", "content": msg_usuario},
      {"role": "assistant", "content": msg_assistente}]
}

cliente.post(endpoint, parametros)
   .then(resposta => {
      console.log(resposta.data.choices[0].message.content);
}).catch(erro => {
  console.log('Erro ao chamar a API:', erro);
});