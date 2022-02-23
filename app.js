const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT||3030, function (){
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/login2', (req,res)=>{
    res.sendFile(__dirname + '/views/login2.html');
});