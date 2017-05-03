let tty = require('tty.js');

let users = {};

if(process.env.USERNAME) {
  users[process.env.USERNAME] = process.env.PASSWORD;
} else {
  users.user = 'pass';
}

let app = tty.createServer({
  shell: 'bash',
  users: users,
  cwd: process.env.FOLDER || '.',
  port: 8000
});

app.listen();
