const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);

// lang nghe cong cua cua ung dung

server.listen(3000, () => {
    console.log('JSON Server is running at http://localhost:3000');
})

module.exports = server;