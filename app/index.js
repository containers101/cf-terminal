let tty = require('tty.js');

let app = tty.createServer({
  shell: 'bash',
  users: {
    foo: 'bar'
  },
  port: 8000
});

app.listen();
