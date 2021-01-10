const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const usersRoutes = require('./routes/users');
const homepageRoutes = require('./routes/hompage')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);
app.use(homepageRoutes);

app.use('/',(req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);