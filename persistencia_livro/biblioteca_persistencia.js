const { Client }  = require('pg')
const { conexao } = require('./conexao')

// Função para INSERIR LIVROS
async function inserirLivros(livros) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = 
    await cliente.query('INSERT INTO livros(isbn, nome_livro, nome_autor, editora, ano_publi, status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *', 
        [livros.isbn, livros.nome_livro, livros.nome_autor, livros.editora, livros.ano_publi, livros.status]);
    await cliente.end();

    return res.rows[0];

}

// Função para LISTAR LIVROS
async function listarLivros() {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM livros ORDER BY id_livro');

    await cliente.end();

    return res.rows;

}

// Função para BUSCAR POR ID DE LIVROS
async function buscarPorIdLivros(id_livros) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM livros WHERE id_livro = $1', 
        [id_livros]);

    await cliente.end();

    return res.rows[0];

}

// Função para BUSCAR POR NOME DE LIVROS
async function buscarPorNomeLivros(nome) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM livros WHERE nome_livro = $1', 
        [nome]);

    await cliente.end();

    return res.rows;

}

// Função para BUSCAR POR STATUS DE LIVROS
async function buscarPorStatusLivros(status) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM livros WHERE status = $1', 
        [status]);

    await cliente.end();

    return res.rows;

}

// Função para BUSCAR POR AUTOR DE LIVROS
async function buscarPorAutorLivros(autor) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM livros WHERE nome_autor = $1', 
        [autor]);

    await cliente.end();

    return res.rows;

}

// Função para RETIRAR LIVROS
async function retirarLivros(id_livro, id_cliente) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT fn_retiralivros($1, $2)', 
        [id_livro, id_cliente]);

    await cliente.end();

    return res.rows[0];

}

// Função para DEVOLVER LIVROS
async function devolverLivros(id_livros) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT fn_devolvelivros($1)', 
        [id_livros]);

    await cliente.end();

    return res.rows[0];

}

// Função para DELETAR UM LIVRO POR ID
async function deletarLivros(id_livros) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('DELETE FROM livros WHERE id_livro = $1 RETURNING *', 
        [id_livros]);

    await cliente.end();

    return res.rows[0];

}

// Função para ATUALIZAR UM LIVRO
async function atualizarLivros(id, livros) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = 
    await cliente.query('UPDATE livros SET isbn=$1,nome_livro=$2,nome_autor=$3,editora=$4,ano_publi=$5 where id_livro = $6 RETURNING *', 
        [livros.isbn, livros.nome_livro, livros.nome_autor, livros.editora, livros.ano_publi, id]);
    await cliente.end();

    return res.rows[0];

}

module.exports = {
    inserirLivros,
    listarLivros,
    buscarPorIdLivros,
    buscarPorNomeLivros,
    buscarPorStatusLivros,
    buscarPorAutorLivros,
    retirarLivros,
    devolverLivros,
    deletarLivros,
    atualizarLivros
}