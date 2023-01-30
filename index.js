const express = require('express')
const path = require(`path`);
var bodyparser = require("body-parser");
const app = express()
const port = 3000

app.use (bodyparser.urlencoded{(extended:false)})

app.get('/', (req, res) => {
    let options = rootpath.join (_dirname);

  res.sendFile("/views/index.html",options);
})
app.post("/",(req,res) => {
console.log(req.body);
res.send ("recibiendo datos..");

})
app.get(`/hola`,(req,res) =>{
   res.send(`Bien-Venido`);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})