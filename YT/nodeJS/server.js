// user defined modules ~ index.js -> import module from 'index.js;
// core modules ~ fs,http,path,os,process
// extarnal modules ~ express -> npm install --save express

// const feature = require('./feature');
import * as objFeature from "./export.js";
console.log("1.",objFeature.crush1,"2.",objFeature.crush2,"3.",objFeature.crush3);

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
