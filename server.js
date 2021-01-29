const express = require('express')

const db = require('./db')

const app = express()
 
app.get('/proofs',  (req, res) =>  {
  res.json(db.proofs)
})

app.get('/students',  (req, res) =>  {
  res.json(db.students)
})

app.get('/favicon.ico', (req,res)=>{
  res.send('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbds3bgHkpbqknB1UdiqNtjOi7yY4cjtfmQ&usqp=CAU')
} )
 
 
app.listen(3334, () => {
  console.info("Server running in port 3334")
})