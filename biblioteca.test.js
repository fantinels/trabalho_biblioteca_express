const bibliotecaLivro = require('./persistencia/livro_persistencia')
const bibliotecaCliente = require('./persistencia/cliente_persistencia')

let dadosLivrosInicial = bibliotecaLivro.listarLivros(
    {id: 1, isbn: '978-85-390-0022-7', nome_livro: 'A Bússola de Ouro', nome_autor: 'Phillip Pulman', editora: 'Ponto de Leitura', 
        ano_publi: '07/1995', status: 'disponível'},
    {id: 2, isbn: '978-65-5535-155-2', nome_livro: '23 motivos para não se apaixonar', nome_autor: 'Gabie Fernandes', editora: 'Planeta', 
        ano_publi: '10/2020', status: 'disponível'},
    {id: 3, isbn: '978-85-65765-48-0', nome_livro: 'Mentirosos', nome_autor: 'E. Lockhart', editora: 'Seguinte', 
        ano_publi: '05/2014', status: 'disponível'})

let dadosLivrosClientesInicial = bibliotecaLivro.listarLivrosClientes(
    {id_livro: 1, nome_livro: 'A Seleção', cliente: {matricula: '489562', nome_cliente: 'Vivi', telefone: '94589-5462'}})

let dadosLivrosInserir = bibliotecaLivro.listarLivros(
    {id: 1, isbn: '978-85-390-0022-7', nome_livro: 'A Bússola de Ouro', nome_autor: 'Phillip Pulman', editora: 'Ponto de Leitura', 
        ano_publi: '07/1995', status: 'disponível'},
    {id: 2, isbn: '978-65-5535-155-2', nome_livro: '23 motivos para não se apaixonar', nome_autor: 'Gabie Fernandes', editora: 'Planeta', 
        ano_publi: '10/2020', status: 'disponível'},
    {id: 3, isbn: '978-85-65765-48-0', nome_livro: 'Mentirosos', nome_autor: 'E. Lockhart', editora: 'Seguinte', 
        ano_publi: '05/2014', status: 'disponível'},
    {id: 4, isbn: '978-85-65765-57-2', nome_livro: 'Por Lugares Incríveis', nome_autor: 'Jennifer Niven', editora: 'Seguinte', 
    ano_publi: '01/2015', status: 'disponível'})

let dadosLivrosDeletar = bibliotecaLivro.listarLivros(
    {id: 1, isbn: '978-85-390-0022-7', nome_livro: 'A Bússola de Ouro', nome_autor: 'Phillip Pulman', editora: 'Ponto de Leitura', 
        ano_publi: '07/1995', status: 'disponível'},
    {id: 2, isbn: '978-65-5535-155-2', nome_livro: '23 motivos para não se apaixonar', nome_autor: 'Gabie Fernandes', editora: 'Planeta', 
        ano_publi: '10/2020', status: 'disponível'},
    {id: 3, isbn: '978-85-65765-48-0', nome_livro: 'Mentirosos', nome_autor: 'E. Lockhart', editora: 'Seguinte', 
        ano_publi: '05/2014', status: 'disponível'})

let dadosLivrosAtualizar = bibliotecaLivro.listarLivros(
    {id: 1, isbn: '978-85-390-0022-7', nome_livro: 'A Bússola de Ouro', nome_autor: 'Phillip Pulman', editora: 'Ponto de Leitura', 
        ano_publi: '07/1995', status: 'disponível'},
    {id: 2, isbn: '978-65-5535-155-2', nome_livro: '23 motivos para não se apaixonar', nome_autor: 'Gabie Fernandes', editora: 'Planeta', 
        ano_publi: '10/2020', status: 'disponível'},
    {id: 3, isbn: '978-85-62409-88-2', nome_livro: 'A Garota do Lago', nome_autor: 'Charlie Donlea', editora: 'Faro Editorial', 
        ano_publi: '02/2017', status: 'disponível'})

let dadosClienteInicial = bibliotecaCliente.listarCliente (
    {id_cliente: 1, nome_cliente: 'Gabriélen', matricula: '478956', telefone: '98546-98564'},
    {id_cliente: 2, nome_cliente: 'Paola', matricula: '789546', telefone: '98795-2659'}
)

let dadosClienteInserir = bibliotecaCliente.listarCliente (
    {id_cliente: 1, nome_cliente: 'Gabriélen', matricula: '478956', telefone: '98546-98564'},
    {id_cliente: 2, nome_cliente: 'Paola', matricula: '789546', telefone: '98795-2659'},
    {id_cliente: 3, nome_cliente: 'Gabriel', matricula: '489562', telefone: '97856-2356'}
)

let dadosClienteAtualizar = bibliotecaCliente.listarCliente (
    {id_cliente: 1, nome_cliente: 'Gabi', matricula: '568946', telefone: '97895-4589'},
    {id_cliente: 2, nome_cliente: 'Paola', matricula: '789546', telefone: '98795-2659'},
    {id_cliente: 3, nome_cliente: 'Gabriel', matricula: '489562', telefone: '97856-2356'}
)

let dadosClienteDeletar = bibliotecaCliente.listarCliente (
    {id_cliente: 1, nome_cliente: 'Gabi', matricula: '568946', telefone: '97895-4589'},
    {id_cliente: 2, nome_cliente: 'Paola', matricula: '789546', telefone: '98795-2659'}
)

//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=
//  LIVROS
//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=

// Cenário de Sucesso - Listar Livros e Clientes
test("Listar retorna os livros e seus clientes", () => {
    expect(bibliotecaLivro.listarLivrosClientes()).toEqual(dadosLivrosClientesInicial)
})

// Cenário de Sucesso - Listar Livros
test("Listar retorna lista de livros", () => {
    expect(bibliotecaLivro.listarLivros()).toEqual(dadosLivrosInicial)
})

// Cenário de Sucesso - Inserir Livros
test("Inserir livro Por Lugares Incríveis deve ser inserido na tabela com ID 4 gerado", () => {
    const livroInserido = {
        id: 4,
        isbn: '978-85-65765-57-2',
        nome_livro: 'Por Lugares Incríveis',
        nome_autor: 'Jennifer Niven',
        editora: 'Seguinte',
        ano_publi: '01/2015',
        status: 'disponível'
    }
    bibliotecaLivro.inserirLivros(livroInserido)
    expect(bibliotecaLivro.listarLivros()).toEqual(dadosLivrosInserir)
})

// Cenário de Sucesso - Deletar Livros
test("Apagar livro de ID 4 deve remover o livro da tabela", () => {
    bibliotecaLivro.deletarLivros(4)
    expect(bibliotecaLivro.listarLivros()).toEqual(dadosLivrosDeletar)
})

// Cenário de Sucesso - Atualizar Livros
test("Alterar livro de ID 3 para 'A Garota do Lago' com os seus respectivos dados, deve atualizar a tabela de livro", () => {
    const livroAltualizado = {
        isbn: '978-85-62409-88-2',
        nome_livro: 'A Garota do Lago',
        nome_autor: 'Charlie Donlea',
        editora: 'Faro Editorial',
        ano_publi: '02/2017',
        status: 'disponível'
    }

    const idAlterar = 3

    bibliotecaLivro.atualizarLivros(idAlterar, livroAltualizado)
    expect(bibliotecaLivro.listarLivros()).toEqual(dadosLivrosAtualizar)
})

//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=
//  CLIENTE
//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=

// Cenário de Sucesso - Listar Clientes
test("Listar retorna lista de clientes", () => {
    expect(bibliotecaCliente.listarCliente()).toEqual(dadosClienteInicial)
})

// Cenário de Sucesso - Inserir Clientes
test("Inserir cliente 3 deve ser inserido na tabela com ID 3 gerado", () => {
    const clienteInserido = {
        id_cliente: 3, 
        nome_cliente: 'Gabriel', 
        matricula: '489562', 
        telefone: '97856-2356'
    }
    bibliotecaCliente.inserirCliente(clienteInserido)
    expect(bibliotecaCliente.listarCliente()).toEqual(dadosClienteInserir)
})

// Cenário de Sucesso - Atualizar Clientes
test("Alterar cliente 'Gabriélen' para 'Gabi' com os seus respectivos dados, deve atualizar a tabela de cliente", () => {
    const clienteAltualizado = {
        nome_cliente: 'Gabi', 
        matricula: '568946', 
        telefone: '97895-4589'
    }

    const idAlterar = 1

    bibliotecaCliente.atualizarClientes(idAlterar, clienteAltualizado)
    expect(bibliotecaCliente.listarCliente()).toEqual(dadosClienteAtualizar)
})

// Cenário de Sucesso - Deletar Clientes
test("Apagar cliente de ID 3 deve remover o cliente da tabela", () => {
    bibliotecaCliente.deletarCliente(3)
    expect(bibliotecaCliente.listarCliente()).toEqual(dadosClienteDeletar)
})