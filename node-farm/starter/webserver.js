const fs=require('fs');
const http=require('http');  // this give power for n/w

const saiserver=http.createServer((req,res)=>{

    res.end('this is my server my wish who r u  im a web dev  127.0.0.1');// this will be printed in the browser
});

// 127.0.0.1 is localhost
saiserver.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 8000');//this will print 1st in the console
    //after this we will open the browser 
    
});

//createServer is a method in http module
//it takes a callback function as an argument
//the callback function takes two arguments req and res

//saiserver is an object
//listen is a method in the saiserver object
//it takes two arguments port number and ip address
//it also takes a callback function as an argument
//the callback function is executed when the server starts listening to requests


