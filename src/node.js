const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: 'key',  // 确保使用正确的 API 密钥
});

async function verifyApiKey() {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: 'Hello, how are you?' }],
        });
        console.log('API key is valid. Response:', response);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

verifyApiKey();
