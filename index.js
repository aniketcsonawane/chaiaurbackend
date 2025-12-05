require('dotenv').config();
const express = require('express');

const app = express();
// const port = 4000;

app.get('/',(req, res)=>{
    res.send('<h1>Home</h1>');
});

app.listen(process.env.PORT,()=>{
    console.log(`Server Started ! at port: ${process.env.PORT}`)
});