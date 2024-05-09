const axios = require('axios');

exports.sendMessageToLLM = async function(message) {
    try {
        const response = await axios.post(process.env.LLM_API_URL, {
            prompt: message,
            max_tokens: 150
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error calling LLM:', error);
        throw error;
    }
};