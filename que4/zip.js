const fs = require('fs'); 
const archiver = require('archiver'); 

const output = fs.createWriteStream('folder.zip');

const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
    console.log('zip created successfully!');
});

archive.pipe(output);

archive.directory('folder/', false);

archive.finalize();
