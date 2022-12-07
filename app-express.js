const bibliotecaNegocioLivro = require('./negocio/livro_negocio');
const bibliotecaPersistenciaLivro = require('./persistencia/livro_persistencia');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// LIVROS
app.get('/livroseclientes', async(req, res) => {
    try {
        const livrosClientes = await bibliotecaNegocioLivro.listarLivrosClientes()
        res.json(livrosClientes);
    } catch (error) {
        res.status(500).json({Erro: "Erro na Aplicação"});
    }
  
})

app.get('/livros', async(req, res) => {
    try {
        const livros = await bibliotecaNegocioLivro.listarLivros()
        res.json(livros);
    } catch (error) {
        res.status(500).json({Erro: "Erro na Aplicação"});
    }
  
})

app.get('/livros/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const buscaId = await bibliotecaNegocioLivro.buscarId(id);
        res.send(buscaId);
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        }
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        }
    }
})

app.get('/livros/:nome', async (req, res) => {
    const nome = req.params.nome;

    try {
        const buscaNome = await bibliotecaNegocioLivro.buscarNome(nome);
        res.json(buscaNome);
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        }
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        }
        
    }
})

app.get('/livros/:status', async (req, res) => {
    const status = req.params.status;

    try {
        const buscaStatus = await bibliotecaNegocioLivro.buscarStatus(status);
        res.json(buscaStatus);
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        } 
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        }
    }
})

app.get('/livros/:autor', async (req, res) => {
    const autor = req.params.autor;

    try {
        const buscaAutor = await bibliotecaNegocioLivro.buscarAutor(autor);
        res.json(buscaAutor)
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        }
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        }
            
    }
})

app.post('/livros', async (req, res) => {
    const livros = req.body;

    try {
        const livroInserir = await bibliotecaNegocioLivro.inserirLivros(livros)
        res.status(201).json(livroInserir)
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        } 
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        }
    }
    
})

app.delete('/livros/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const livroDeletado = await bibliotecaNegocioLivro.deletarLivro(id)
        res.json(livroDeletado)
    } catch (error) {
        if(error && error.id) {
            res.status(error.id).json({Erro: error.msg})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicação"});
        }   
    }
    
})

app.put('/livros/:id', async (req, res) => {
    const id = req.params.id;
    const livros = req.body;

    try {
        const livroAtualizado = await bibliotecaNegocioLivro.atualizarLivro(id, livros);
        res.json(livroAtualizado);
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        }
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        }
    }
})

app.get('/retirar/idL/idC', async (req, res) => {
    const idL = req.params.idL;
    const idC = req.params.idC;

    try {
        const retiraLivro = bibliotecaPersistenciaLivro.retirarLivros(idL, idC);
        res.status(200).json(retiraLivro);
    } catch (error) {
        res.json(error);
    } 
})

// ver como como fica a função para retirar e devolver

// CLIENTE
app.get('/clientes', (req, res) => {
    res.send("Clientes Procurados!");
  })

app.get('/clientes/:id', (req, res) => {
    res.send("Clientes Procurados por ID!");
})

app.post('/clientes', (req, res) => {
    res.send("Cliente inserido!")
})

app.delete('/clientes/:id', (req, res) => {
    res.send("Cliente deletado!")
})

app.put('/clientes/:id', (req, res) => {
    res.send("Cliente atualizado!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})