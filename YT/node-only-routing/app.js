import url from 'url';
import fs from 'fs';

function render(path, res) {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            console.error(`Error reading ${path}:`, error);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Unable to read data');
        } else {
            res.write(data);
        }
        res.end();
    });
}

export const handleRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
            render('./home.html', res);
            break;
        case '/login':
            render('./login.html', res);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Route not defined');
            res.end();
    }
};
