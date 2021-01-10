const http = require('http');

const express = require('express');

const app = express();

app.use('/users',(req,res,next) => {
  res.send('<h1>This is the users page</h1>');
});

app.use((req,res,next) => {
  console.log('this happens on all pages, hi');
  res.send('<h1>Welcome to the main page</h1>');
  next();
})

app.use('/test',(req,res,next) => {
  console.log('this happens at the /next route');
  res.send('<h1>this is the test page</h1>');
})

app.listen(3000);



