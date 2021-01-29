const express = require('express')

const cors = require('cors')

const db = require('./db')

app.use(cors(''))

const app = express()
 
app.get('/proofs',  (req, res) =>  {
  res.json(db.proofs)
})

app.get('/students',  (req, res) =>  {
  res.json(db.students)
})

app.get('/favico.ico', (req, res) => {
  res.sendStatus(404);
});
 
app.listen(3334, () => {
  console.info("Server running in port 3334")
})