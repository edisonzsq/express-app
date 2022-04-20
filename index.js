const express = require("express");
const path = require('path');
const cors = require('cors'); // add this

const app = express();
app.use(cors()); // add this

app.use(express.static(path.join(__dirname,'client/build/')));

app.get('/api/getList', (req, res) => {
    let list = ["item1", "item2", "item3"];
    res.json(list);
    console.log("Sent list of items");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5050;
app.listen(port);

console.log("App is listening on port " + port);