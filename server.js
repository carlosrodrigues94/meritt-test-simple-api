require("dotenv").config();

const express = require("express");

const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.get("/", (request, response) => {
  response.status(200).json({ ok: true });
});

app.get("/proofs", (request, response) => {
  response.status(200).json(db.proofs);
});

app.get("/students", (request, response) => {
  response.status(200).json(db.students);
});

app.get("/favico.ico", (request, response) => {
  response.sendStatus(404);
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.info(`Server running in port ${PORT}`);
});
