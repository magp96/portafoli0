const express = require('express');
const app = express();
app.listen(4000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes server
app.use(require('./src/routes/index'));

console.log('Server on port 4000');
