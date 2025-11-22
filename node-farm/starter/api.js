const fs  = require('fs');//importing file system module
const http = require('http');   //n/w server 
const url  = require('url');    //url module


//blocking, synchronous way
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);   

const ganeshServer = http.createServer((req, res) => {
  
    const pathName = req.url;  //getting the url path name
    if(pathName === '/') {
        res.end('this is the home page');
    }else if(pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data); //sending data to the browser


        //non-blocking, asynchronous way
        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
        //     const productData = JSON.parse(data);
        //     //console.log(productData); we will grt in terminal 

        //     res.end(data);
        // });

        
    }else if(pathName === '/ganesh') {
     res.end('this is the ganesh page');
    }else{
        res.end('404 Not Found');
    }
});
ganeshServer.listen(8000, '127.0.0.1', () => {  //listening to server
    console.log('Listening to request on port 8000');
});