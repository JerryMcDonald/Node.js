//core modules
const http = require('http');

//custom files
const {someText, handler} = require('./routes');

const server = http.createServer(handler);

server.listen(3000);
