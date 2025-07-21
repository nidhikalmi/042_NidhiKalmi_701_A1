
const fs = require('fs');
const unzipper = require('unzipper');

fs.createReadStream('folder.zip')
  .pipe(unzipper.Extract({ path: 'unzipped' }))
  .on('close', () => {
    console.log('Unzip successfully');
  });
