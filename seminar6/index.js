// import { number } from "./constants.js";

// const number = require("./constants");
const PORT = 3000;
const express = require('express'); 
const morgan = require('morgan');
const app = express(); 

app.use(morgan('dev'));
app.get('/', function (req, res) { 
    res.send('Hello World') 
}); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 