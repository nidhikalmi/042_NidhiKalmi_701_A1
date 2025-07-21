const readline = require('readline');
const getresponse = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Simple Chatbot \n Type 'exit' to quit.");

function chat() {
    rl.question("You: ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Bot: Bye");
            rl.close();
        } 
        else 
        {
            const reply = getresponse(input);
            console.log("Bot:", reply);
            chat();
        }
    });
}

chat();