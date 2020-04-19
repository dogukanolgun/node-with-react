const http = require('http');
const dt = require('./myfirstmodule.js');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.write('\n' + req.url);
    res.end();
  })
  .listen(8080);
