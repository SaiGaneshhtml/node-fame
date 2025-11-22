const fs  = require('fs');//importing file system module
const http = require('http');   //n/w server 
const url  = require('url');    //url module

const ganeshServer = http.createServer((req, res) => {
  
    const pathName = req.url;  //getting the url path name
    if(pathName === '/') {
        res.end('this is the home page');
    }else if(pathName === '/sai') {
        res.end('this is the sai page');
    }else if(pathName === '/ganesh') {
     res.end('this is the ganesh page');
    }else{
        res.end('404 Not Found');
    }
});
ganeshServer.listen(8000, '127.0.0.1', () => {  //listening to server
    console.log('Listening to request on port 8000');
});