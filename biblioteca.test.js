const bibliotecaLivro = require('./negocio/livro_negocio')
const bibliotecaCliente = require('./negocio/cliente_negocio')
const { listarLivros, buscarPorIdLivros, listarLivrosClientes, buscarPorNomeLivros, buscarPorStatusLivros, buscarPorAutorLivros } = require('./persistencia/livro_persistencia')
const { listarCliente, buscarPorIdCliente } = require('./persistencia/cliente_persistencia')


//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=
//  LIVROS
//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=

// Cenário de Sucesso - Listar Livros e Clientes
test("Listar retorna os livros e seus clientes", () => {
    expect(bibliotecaLivro.listarLivrosClientes()).toEqual(listarLivrosClientes())
})

// Cenário de Sucesso - Listar Livros
test("Listar retorna dados da tabela de livros", () => {
    expect(bibliotecaLivro.listarLivros()).toEqual(listarLivros())
})

// Cenário de Sucesso - Inserir Livros
test("Inserir livro Por Lugares Incríveis deve ser inserido na tabela com ID gerado", () => {
    const livroInserido = {
        isbn: '978-85-65765-57-2',
        nome_livro: 'Por Lugares Incríveis',
        nome_autor: 'Jennifer Niven',
        editora: 'Seguinte',
        ano_publi: '01/2015',
        status: 'disponível'
    }
    bibliotecaLivro.inserirLivros(livroInserido)
    expect(bibliotecaLivro.listarLivros()).toEqual(listarLivros())
})

// Cenário de Sucesso - Buscar por ID de Livros
test("Buscar por ID 4 deve retornar o livro 4", () => {
    expect(bibliotecaLivro.buscarId(4)).toEqual(buscarPorIdLivros())
})

// Cenário de Sucesso - Buscar por NOME de Livros
test("Buscar por nome 'A Bússola de Ouro' deve retornar o livro 'A Bússola de Ouro'", () => {
    expect(bibliotecaLivro.buscarNome('A Bússola de Ouro')).toEqual(buscarPorNomeLivros())
})

// Cenário de Sucesso - Buscar por STATUS
test("Buscar por status 'disponível' deve retornar os livros disponíveis", () => {
    expect(bibliotecaLivro.buscarStatus('disponível')).toEqual(buscarPorStatusLivros())
})

// Cenário de Sucesso - Buscar por AUTOR
test("Buscar por autor 'E. Lockhart' deve retornar os livros deste autor", () => {
    expect(bibliotecaLivro.buscarAutor('E. Lockhart')).toEqual(buscarPorAutorLivros())
})

// Cenário de Sucesso - Deletar Livros
test("Apagar livro de ID 4 deve remover o livro da tabela", () => {
    bibliotecaLivro.deletarLivro(4)
    expect(bibliotecaLivro.listarLivros()).toEqual(listarLivros())
})

// Cenário de Sucesso - Atualizar Livros
test("Alterar livro 'A Garota do Lago' para 'A Seleção' com os seus respectivos dados, deve atualizar a tabela de livro", () => {
    const livroAltualizado = {
        isbn: '978-85-65765-01-5',
        nome_livro: 'A Seleção',
        nome_autor: 'Kiera Kass',
        editora: 'Seguinte',
        ano_publi: '04/2012',
        status: 'disponível'
    }

    const idAlterar = 1

    bibliotecaLivro.atualizarLivro(idAlterar, livroAltualizado)
    expect(bibliotecaLivro.listarLivros()).toEqual(listarLivros())
})

//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=
//  CLIENTE
//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=

// Cenário de Sucesso - Listar Clientes
test("Listar retorna dados da tabela de clientes", () => {
    expect(bibliotecaCliente.listarCliente()).toEqual(listarCliente())
})

// Cenário de Sucesso - Inserir Clientes
test("Inserir cliente Vivi deve ser inserido na tabela com ID gerado", () => {
    const clienteInserido = {
        nome_cliente: "Vivi",
        matricula: "489562", 
        telefone:"94589-5462"
    }
    bibliotecaCliente.inserirCliente(clienteInserido)
    expect(bibliotecaCliente.listarCliente()).toEqual(listarCliente())
})

// Cenário de Sucesso - Buscar por ID de Clientes
test("Buscar por ID 5 deve retornar o cliente 5", () => {
    expect(bibliotecaCliente.buscarPorIdCliente(5)).toEqual(buscarPorIdCliente())
})

// Cenário de Sucesso - Atualizar Clientes
test("Alterar cliente 'Gabriélen' para 'Gabi' com os seus respectivos dados, deve atualizar a tabela de cliente", () => {
    const clienteAltualizado = {
        nome_cliente: 'Gabi',
        matricula: "478956", 
        telefone:"95489-6597"
    }

    const idAlterar = 5

    bibliotecaCliente.atualizarCliente(idAlterar, clienteAltualizado)
    expect(bibliotecaCliente.listarCliente()).toEqual(listarCliente())
})

// Cenário de Sucesso - Deletar Clientes
test("Apagar cliente de ID 7 deve remover o cliente da tabela", () => {
    bibliotecaCliente.deletarCliente(7)
    expect(bibliotecaCliente.listarCliente()).toEqual(listarCliente())
})