require('dot-env').confi()

const express = require('express')

const cors = require('cors')

const db = require('./db')


const app = express()

app.use(cors())
 
app.get('/proofs',  (request, response) =>  {
  response.status(200).json(db.proofs)
})

app.get('/students',  (request, response) =>  {
  response.status(200).json(db.students)
})

app.get('/favico.ico', (request, response) => {
  response.sendStatus(404);
});

const PORT = process.env.PORT || 8081;
 
app.listen(PORT, () => {
  console.info(`Server running in port ${PORT}`)
})