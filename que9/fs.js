const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the file name with txt: ", function(fileName) {

  rl.question("Enter the content for the file: ", function(content) {
    
  
    fs.writeFileSync(fileName, content);
    console.log("File created with your content.");

   
    const data = fs.readFileSync(fileName);
    console.log("\nFile content is:\n" + data);

    rl.close(); 
  });

});
