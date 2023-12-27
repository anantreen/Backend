// // console.log(process.env);
// // console.log(process.env.NVM_DIR);

// // Archituctue + Nodejs System 
 
// //express module ~
// import http from 'http';
// import fs from 'fs';
// function onRequest(req, res) {
//     // HTTP GET 
//     // HTTP REQUEST PATH 
//     console.log('server Created');
//     // res.writeHead(200,{'Content-Type': 'text/html'});
//     fs.readFile('./apple.html', null , (err, data) => {
//         if(err) res.write('Error reading');
//         else res.write(data);
//         res.end();
//     });
    
// }
// http.createServer(onRequest).listen(3000,()=>{
//     console.log('listening on port');
// });

/*
1.CLI Apps
2.Rest APIs
3.Graphql APIs
4.Server side rendering (ejs/pug)
*/

const express  = require('express');
const app = express();
const port = 3000;

// app.use()
//==================================================//
app.get('/', (req, res) => res.send('Hello World!')) // HTTP GET /
app.get('/ayhello',(req, res)=> res.statusCode(200).json({msg:"Hello World!"})) // HTTP GET /
// CRUD OPERATION
// ROUTING IN EXPRESS
// HTTP://LOCALGHOST:3000/USERS
// LIST OF USERS
app.get('/users', (request, response) => {
  response.status(200).json(users)
})
