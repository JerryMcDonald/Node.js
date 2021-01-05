const fs = require('fs');
const { brotliDecompressSync } = require('zlib');
// const {request} = require('http');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello!</title></head>');
    res.write('<h1>Hello, Enter a user name to Create a user</h1>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html');
    // the return statement is so we do not continue with the function after the if statement
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User List</title></head>');
    res.write('<h1>User List</h1>');
    res.write('<ul><li>Jerry M</li></ul>');
    res.write('<ul><li>Heather M</li></ul>');
    res.write('<ul><li>Paisley M</li></ul>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST'){
    // parse the incoming data and log it to the console!
    const data = [];
    req.on('data', (chunk) => {
      data.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(data).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/users');
    return res.end();
}
}

exports.handler = requestHandler;

