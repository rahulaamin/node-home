const express = require("express")
const app = express();
var port  = process.env.port || 3000;
app.get('/', (req, res) => res.send('Hello World !!!'));
app.listen(port, ()=> console.log("Server is runnion on port : " + port ));