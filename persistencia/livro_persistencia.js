const { Client }  = require('pg')
const { conexao } = require('./conexao')

// Função para INSERIR LIVROS
async function inserirLivros(livros) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query(`INSERT INTO livros(isbn, nome_livro, nome_autor, editora, ano_publi, status) 
                                VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, 
                                [livros.isbn, livros.nome_livro, livros.nome_autor, livros.editora, livros.ano_publi, livros.status]);
    await cliente.end();
    return res.rows[0];

}

// Função para LISTAR LIVROS E CLIENTES
async function listarLivrosClientes() {
    const cliente = new Client(conexao)
    await cliente.connect();
    const sql = `SELECT aluguel.id_livro, cliente.matricula, cliente.nome_cliente, livros.nome_livro, 
                cliente.matricula as matricula_cli, cliente.nome_cliente as nome_cli, cliente.telefone as telefone_cli
                FROM aluguel
                INNER JOIN cliente ON (aluguel.matricula = cliente.matricula)
                INNER JOIN livros ON (aluguel.id_livro = livros.id_livro)`
    const res = await cliente.query(sql);
    let listaLivros = res.rows.map(function (data) {
        return {
            id_livro: data.id_livro,
            nome_livro: data.nome_livro,
            cliente: {
                matricula: data.matricula_cli,
                nome_cliente: data.nome_cli,
                telefone: data.telefone_cli
            }
        };
    })
    await cliente.end();
    return listaLivros;

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
    const res = await cliente.query('SELECT * FROM livros WHERE id_livro = $1', [id_livros]);
    await cliente.end();
    return res.rows[0];

}

// Função para BUSCAR POR NOME DE LIVROS
async function buscarPorNomeLivros(nome) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM livros WHERE nome_livro = $1', [nome]);
    await cliente.end();
    return res.rows;

}

// Função para BUSCAR POR STATUS DE LIVROS
async function buscarPorStatusLivros(status) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM livros WHERE status = $1', [status]);
    await cliente.end();
    return res.rows;

}

// Função para BUSCAR POR AUTOR DE LIVROS
async function buscarPorAutorLivros(autor) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM livros WHERE nome_autor = $1', [autor]);
    await cliente.end();
    return res.rows;

}

// Função para RETIRAR LIVROS
async function retirarLivros(matricula, id_livro) {
    const cliente = new Client(conexao)
    await cliente.connect();
    let query = `INSERT INTO aluguel(matricula, id_livro) VALUES ('${matricula}', '${id_livro}') RETURNING *`
    const res = await cliente.query(query);
    await cliente.end();
    return res.rows[0];
 
}

// Função para VERIFICAR DISPONIBILIDADE
async function verificaDisponibilidade(id_livro) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query(`SELECT * from livros where id_livro = $1 
                                        and status = 'disponível'`, [id_livro]);
    await cliente.end();
    return res.rows[0];
}
// Função para DEIXAR INDISPONÍVEL
async function indisponibilizaLivro(id_livro) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query(`UPDATE livros SET status = 'indisponível'
                                        WHERE id_livro = $1 RETURNING *`, [id_livro]);
    await cliente.end();
    return res.rows[0];
}

// Função para DEVOLVER LIVROS
async function devolverLivros(id_livros) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query(`DELETE FROM aluguel WHERE id_livro = $1 RETURNING *`, [id_livros]);
    await cliente.end();
    return res.rows[0];

}

// Função para DISPONIBILIZAR LIVRO
async function disponibilizaLivro(id_livro) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query(`UPDATE livros SET status = 'disponível'
                                        WHERE id_livro = $1 RETURNING *`, [id_livro]);
    await cliente.end();
    return res.rows[0];
}

// Função para DELETAR UM LIVRO POR ID
async function deletarLivros(id_livros) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('DELETE FROM livros WHERE id_livro = $1 RETURNING *', [id_livros]);
    await cliente.end();
    return res.rows[0];

}

// Função para ATUALIZAR UM LIVRO
async function atualizarLivros(id, livros) {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = 
    await cliente.query(`UPDATE livros SET isbn = $1, nome_livro = $2, nome_autor = $3, editora = $4, ano_publi = $5 
                            WHERE id_livro = $6 RETURNING *`, 
                            [livros.isbn, livros.nome_livro, livros.nome_autor, livros.editora, livros.ano_publi, id]);
    await cliente.end();
    return res.rows[0];

}

module.exports = {
    inserirLivros,
    listarLivrosClientes,
    listarLivros,
    buscarPorIdLivros,
    buscarPorNomeLivros,
    buscarPorStatusLivros,
    buscarPorAutorLivros,
    retirarLivros,
    verificaDisponibilidade,
    indisponibilizaLivro,
    devolverLivros,
    disponibilizaLivro,
    deletarLivros,
    atualizarLivros
}