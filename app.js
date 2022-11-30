const express = require('express')
const app = express()
const port = 3000

app.get('/livros', (req, res) => {
  res.send("Livros Procurados!");
})

app.get('/cliente', (req, res) => {
  res.send("Clientes Procurados!");
})

app.get('/livros/id', (req, res) => {
    res.send("Livros Procurados por ID!");
})

app.get('/clientes/id', (req, res) => {
    res.send("Clientes Procurados por ID!");
})