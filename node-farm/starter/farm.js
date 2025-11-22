const fs = require('fs');
const http = require('http');
const url = require('url');
//use replaceTemplate module to replace templates
const replaceTemplate = require('./modules/replaceTemplate');
// Template replace function

// Load templates and data
let tempOverview, tempProduct, tempCard, data, dataObj;
try {
    tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
    tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
    tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
} catch (e) {
    // Fail quietly: you can handle loading errors as you wish here.
}

try {
    data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
    dataObj = JSON.parse(data);
} catch (e) {
    // Fail quietly: you can handle loading errors as you wish here.
}

// Main server function
const Server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // Overview page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        res.end(tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml));
    }
    // API
    else if (pathname === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    }
    // Product page
    else if (pathname === '/product') {
        if (query.id === undefined || !dataObj[query.id]) {
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.end('Product Not Found');
            return;
        }
        res.writeHead(200, { 'Content-type': 'text/html' });
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);
    }
    // Not found
    else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('404 Not Found');
    }
});

const port = process.env.PORT || 8000;
Server.listen(port);
console.log(`Server listening on port ${port}`);