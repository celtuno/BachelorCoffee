const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! \t'+req.query.name)
  let limit = req.query.limit;
  
  
  //res.render('view', {type: "block", name: req.query.name,limit});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})