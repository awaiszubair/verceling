const express = require('express');
const app = express();




app.use('/tech', require('./routes/Tech'));
app.use('/games', require('./routes/Games'))
app.use('/gate', require('./routes/Gate'));


app.listen(3000, () => {
    console.log("Server is Listening on Port: ", 3000);
})