const express = require('express');
const app = express();
const { port }= require('./config')

//routes (ścieżki)
const apiRouter = require('./routes/api');


app.use('/', apiRouter);




//server
app.listen(port, () => {
    console.log('server working on port: ', port);
})