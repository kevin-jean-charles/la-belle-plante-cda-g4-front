/* eslint-env es6 */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/la-belle-plante'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/la-belle-plante/index.html'));
});
app.listen(process.env.PORT || 8080);


const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db/data.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})