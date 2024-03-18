const express = require('express');
const Tech = require('./tech');
const Games = require('./games');
const app = express();




app.use('/tech', require('./routes/Tech'));
app.use('/games', require('./routes/Games'))



app.listen(3000, () => {
    console.log("Server is Listening on Port: ", 3000);
})