//const { append } = require('express/lib/response');
const fs =require('fs');//importing file system module 

//here we will perform async file read and write operations
// fs.readFile('txt/start.txt', 'utf-8', (err, data1) => {
//   console.log(data1);
// })
// console.log('Will read file!');// this will be printed first because readFile is async function
// and it will be executed after the entire code is executed

fs.readFile('txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('ERROR!💥');
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
      console.log(data2);
    
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log(data3);
    //writing files
    //we can show both data1 and data3 in the new file ww.txt

    fs.writeFile('./txt/ww.txt', `${data1}\n${data3}\n${data2}`, 'utf-8', err => {
      console.log('Your file has been written 😁');
    });// here i did mistack 
    });
    });
});
console.log('Will read file!');// this will be printed first because readFile is async function

//here above code is async code and it is called callback hell
//because we have nested multiple callbacks
//to avoid this we use promises and async await
//we will see this in the next file async.js