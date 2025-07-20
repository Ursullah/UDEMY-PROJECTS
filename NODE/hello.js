const http = require('node:http'); // require directive to load Node.js core module

// Listener function to handle incoming HTTP requests
const listener = function (request, response) {
  // Set HTTP response header with status and content type
  response.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the response body
  response.end('<h2 style="text-align: center;">Hello World</h2>');
};

// Create HTTP server
const server = http.createServer(listener);

// Server will listen on port 3000
server.listen(3000);

// Log that server is running
console.log('Server running at http://127.0.0.1:3000/');

// Buffer is a temporary storage area for binary data (raw data) in Node.js - Allows Node.js to handle binary data directly - which JS by default is not good at.
// Used when dealing with file systems (fs), streams, and TCP/HTTP networking (transmitting raw data)