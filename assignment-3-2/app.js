const express = require('express');
const path = require('path');

const app = express();

const homeRoutes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);

app.use('/', (req, res, next) => {
  res.send('Page Not Found');
});

app.listen(3000);