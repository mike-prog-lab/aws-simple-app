const express = require("express");
const configuration = require("./src/repository/configuration.repository.js");

const PORT = configuration.getAppPort();

const app = express();

app.get('/', async (req, res) => {
    res.send('Hello on AWS!');
});

app.listen(PORT, () => {
    console.log('App is run on port ' + PORT);
});