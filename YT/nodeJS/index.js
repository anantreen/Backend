// const feature = require('./feature');
import champakChacha,{crush2, crush3} from "./feature.js";
console.log("1.",champakChacha,"2.",crush2,"3.",crush3);

// const http = require('http');
import http from "http";

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

// portNumber , localHost port 5000 , callbackFunction
server.listen(5000,()=>{
    console.log("listening on port");
});
