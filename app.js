const express = require('express')
const app = express()
const port = 3001

// LIVROS
app.get('/livros', (req, res) => {
  res.send("Livros Procurados!");
})

app.get('/livros/id', (req, res) => {
    res.send("Livros Procurados por ID!");
})

app.get('/livros/nome', (req, res) => {
    res.send("Livros Procurados por NOME!");
})

app.get('/livros/status', (req, res) => {
    res.send("Livros Procurados por STATUS!");
})

app.get('/livros/autor', (req, res) => {
    res.send("Livros Procurados por AUTOR!");
})

app.post('/livros', (req, res) => {
    res.send("Livro inserido!")
})

app.delete('/livros/id', (req, res) => {
    res.send("Livro deletado!")
})

app.put('/livros/id', (req, res) => {
    res.send("Livro atualizado!")
}) 

// ver como listar clientes e livros juntos, ver como fica a função para retirar e devolver
// como ver o post, put e delete no browser

// CLIENTE
app.get('/cliente', (req, res) => {
    res.send("Clientes Procurados!");
  })

app.get('/cliente/id', (req, res) => {
    res.send("Clientes Procurados por ID!");
})

app.post('/cliente', (req, res) => {
    res.send("Cliente inserido!")
})

app.delete('/cliente/id', (req, res) => {
    res.send("Cliente deletado!")
})

app.put('/cliente/id', (req, res) => {
    res.send("Cliente atualizado!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})