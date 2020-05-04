console.log("Server gestartet.")

const express = require('express')
const app = express()

//Start page
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
//Start values
console.log("NUMBER: ");
    res.render('index');
});

app.listen(3000);