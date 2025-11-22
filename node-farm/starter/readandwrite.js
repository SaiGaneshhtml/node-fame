const fs = require('fs');//importing file system module help use in reading and writing files
//reading files

const input =fs.readFileSync('txt/final.txt', 'utf-8')
console.log(input);
//writing files
const output = `na lavada lo node js : ${input}.\nCreated on ${Date.now()}`;
fs.writeFileSync('txt/output.txt', output);
console.log('File written!');

//key word is readFileSync and writeFileSync