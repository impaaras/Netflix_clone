const express = require('express');
require('./db/cn');
const app = express();
const path = require("path");
const port = process.env.PORT || 4000;

const static_path = path.join(__dirname, "../public")
console.log(path.join(__dirname, "../public"))

app.use(express.static(static_path));

app.get("/", (req, res) =>{
    res.render('hello')
});
app.listen(port, () =>{
    console.log(`connection is port ${port} now`)
})


