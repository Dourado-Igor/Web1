const express = require('express')
const path = require(`path`);
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let options = root;path,join (_dirname);

  res.sendFile("/views/index.html");
})
app.get(`/hola`,(req,res) =>{
   res.send(`Bien-Venido`) 
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})