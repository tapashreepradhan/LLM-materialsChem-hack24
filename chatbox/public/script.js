async function sendMessage() {
    const inputBox = document.getElementById('userInput');
    const messagesContainer = document.getElementById('messages');
    const userText = inputBox.value;

    if (userText) {
        // Display the user's message
        messagesContainer.innerHTML += `<div>User: ${userText}</div>`;

        // Send the message to the server
        const response = await fetch('/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userText })
        });

        const data = await response.json();

        // Display the bot's response
        messagesContainer.innerHTML += `<div>Bot: ${data.answer}</div>`;

        // Clear the input after sending
        inputBox.value = '';
    }
}
async function sendMessage() {
    const inputBox = document.getElementById('userInput');
    const messagesContainer = document.getElementById('messages');
    const userText = inputBox.value;

    if (userText) {
        // Display the user's message
        messagesContainer.innerHTML += `<div>User: ${userText}</div>`;

        // Send the message to the server
        const response = await fetch('/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userText })
        });

        const data = await response.json();

        // Display the bot's response
        messagesContainer.innerHTML += `<div>Bot: ${data.answer}</div>`;

        // Clear the input after sending
        inputBox.value = '';
    }
}