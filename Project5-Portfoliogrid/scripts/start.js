const liveServer = require('live-server');

liveServer.start({
  port: 5500,
  host: '127.0.0.1',
  open: true,
  file: 'index.html',
  logLevel: 2
});