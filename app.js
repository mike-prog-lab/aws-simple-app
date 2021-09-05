const express = require("express");

const PORT = process.env.PORT;

const app = express();

app.get('/', async (req, res) => {
    res.send('Hello on AWS!');
});

app.listen(PORT, () => {
    console.log('App is run on port ' + PORT);
});