const bibliotecaNegocioLivro = require('./negocio/livro_negocio');
const bibliotecaNegocioCliente = require('./negocio/cliente_negocio');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// LIVROS
app.get('/livroseclientes', async(req, res) => {
    try {
        const livrosClientes = await bibliotecaNegocioLivro.listarLivrosClientes()
        res.status(200).json(livrosClientes);
    } catch (error) {
        res.status(500).json({Erro: "Erro na Aplicação"});
    }
  
})

app.get('/livros', async(req, res) => {
    try {
        const livros = await bibliotecaNegocioLivro.listarLivros()
        res.status(200).json(livros);
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

app.post('/retirar', async (req, res) => {
    const retirar = req.body;
    
    try {
        await bibliotecaNegocioLivro.retiraLivro(retirar.matricula, retirar.id_livro)
        res.status(201);
        res.send("Retirada feita com sucesso!");
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        } else {
            res.status(500).json({Erro: "Erro na Aplicação"})
        }
    }
    
    
})

app.delete('/devolver', async (req, res) => {
    const devolver = req.body;
    
    try {
        await bibliotecaNegocioLivro.devolveLivro(devolver.id_livro);
        res.status(200);
        res.send('Devolução feita com sucesso');
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        } else {
            res.status(500).json({Erro: "Erro na Aplicação"})
        }
    }

})

// CLIENTE
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await bibliotecaNegocioCliente.listarCliente()
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({Erro: "Erro na Aplicação"});
    }
})

app.get('/clientes/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const buscarId = await bibliotecaNegocioCliente.buscarPorIdCliente(id);
        res.json(buscarId)
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        }
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        }
    }
})

app.post('/clientes', async (req, res) => {
    const clientes = req.body;

    try {
        const clienteInserir = await bibliotecaNegocioCliente.inserirCliente(clientes);
        res.status(201).json(clienteInserir) 
    } catch (error) {
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        }
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        }
    }
})

app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id;

    try{
        const clienteDeletado = await bibliotecaNegocioCliente.deletarCliente(id);
        res.json(clienteDeletado);
    }catch(error){
        if(error && error.id) {
            res.status(error.id).json({Erro: error.msg})
        }
        else {
            res.status(500).json({Erro:"Erro na Aplicação"});
        }  
    }

})

app.put('/clientes/:id',async (req, res) => {
    const id = req.params.id;
    const clientes = req.body;

    try{
        const clienteAtualizado = await bibliotecaNegocioCliente.atualizarCliente(id, clientes)
        res.json(clienteAtualizado)
    } catch(error){
        if (error && error.id) {
            res.status(error.id).json({Erro: error.msg});
        }
        else {
            res.status(500).json({Erro: "Erro na Aplicação"});
        } 
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})