const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ msg: "Server is Listening" })
})


app.listen(3000, () => {
    console.log("Server is Listening on Port: ", 3000);
})