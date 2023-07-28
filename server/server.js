const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const user_inform = require('./routes/user_inform');
const users = require('./routes/users');

// let corsOptions = {
//     origin: 'https://localhost:3000',
//     credentials: true
// }
// app.use(cors(corsOptions)); 
app.use(cors()); 

app.use(express.static(path.join(__dirname, 'petman-view/build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'petman-view/build/index.html'));
});

app.use('/user_inform', user_inform);
app.use('/users', users);


app.listen(3001, function(){
    console.log('listening on 3001');
});
