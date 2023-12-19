const feature = require('./feature');
console.log("1.",feature.crush1,"1.",feature.crush2,"1.",feature.crush3); 

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("server created");
    if(req.url === "/"){
        res.end("<h1> Base / Page </h1>");
    }else if(req.url === "/about"){
        res.end("<h1> About Page ~ Kitab Nation </h1>");
    }else if(req.url === "/cart"){
        res.end("<h1> Cart Page ~ Kitab Nation </h1>");
    }else if(req.url === "/contact"){
        res.end("<h1> Contact Page ~ Kitab Nation </h1>");
    }else if(req.url === "/login"){
        res.end("<h1> Login Page ~ Kitab Nation </h1>");
    }else{
        res.end("<h1> Contact Page ~ Kitab Nation</h1>");
    }
});
server.listen(5000,()=>{
    console.log("listening on port");
});