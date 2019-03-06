var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
app.use(cors())
app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+ '/dist/index.html'));
});

var port  = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log("server is listening on" , port );
})