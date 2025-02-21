const OpenAI = require('openai');
require('dotenv').config(); // 加载环境变量
// const { HttpsProxyAgent } = require('https-proxy-agent');


// const proxyAgent = new HttpsProxyAgent('http://127.0.0.1:2080');
console.log(process.env.OPENAI_API_KEY)
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 直接替换成你的 API 密钥
//   httpAgent: proxyAgent, // 添加代理
  timeout: 10000,        // 10秒超时
  baseURL: 'https://api.chatanywhere.tech/v1'
});

async function main() {
  try {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: '你是谁创造的？' }],
     model: 'gpt-3.5-turbo'
    },
// {
//     proxy:{
//         host: '127.0.0.1',
//         port: 7890,
//     }
// }
);
    console.log(chatCompletion.choices[0].message.content); // 输出回复内容
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

main();
