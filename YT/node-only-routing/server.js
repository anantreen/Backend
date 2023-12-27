import http from 'http';
import {handleRequest} from './app.js';

http.createServer(handleRequest).listen(3000);