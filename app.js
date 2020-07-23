const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const cors = require('./app/cors');

const app = express();
app.set(process.env.PORT || 5000);
app.use('/api', cors.configure);
app.use(bodyParser.json({ limit: '5mb' }));

routes.declare(app);

http.createServer(app).listen(process.env.PORT || 5000, () => { 
  console.log(`Server listening to - ${process.env.PORT || 5000}`);
});

module.exports = app;