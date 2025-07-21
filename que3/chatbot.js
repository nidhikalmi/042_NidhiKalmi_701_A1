function getresponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hey") || msg.includes("hello") || msg.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (msg.includes("bye") || msg.includes("goodbye")) {
        return "Goodbye! Take care!";
    } else if (msg.includes("what is your name")) {
        return "I am your friendly chatbot!";
    } else if (msg.includes("who made you") || msg.includes("creator")) {
        return "I was created by a developer using Node.js!";
    } else if (msg.includes("help")) {
        return "I can help you with greetings, casual chat, and basic questions. Try saying hello!";
    } else if (msg.includes("thanks") || msg.includes("thank you")) {
        return "You're welcome!";
    } else {
        return "Sorry, I didn't understand that. Can you please rephrase?";
    }
}

module.exports = getresponse;
