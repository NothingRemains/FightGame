const http = require('http'); //set up server
const fs = require('fs') //grab modules
const url = require('url'); // look what req type in url
const querystring = require('querystring'); //look what req fetch req
const figlet = require('figlet') //ASCII art

//server code here
const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname; //get path name
    const params = querystring.parse(url.parse(req.url).query); //get query parameters
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (page == '/battle') {
        fs.readFile('battle.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }); 
    } else if (page == '/style.css') {
        fs.readFile('style.css', function(err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/index.js') {
        fs.readFile('index.js', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        figlet('404!!', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000); //server running port 8000