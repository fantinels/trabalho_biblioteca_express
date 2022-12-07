const bibliotecaPersistenciaLivro = require('./persistencia/livro_persistencia')
const bibliotecaNegocioLivro = require('./negocio/livro_negocio');

async function main() {
    
    // Caso de sucesso para inserção de livros (todos parâmetros preenchidos)
    try {
        const livroInserido1 = await bibliotecaNegocioLivro.inserirLivros({
            isbn: "978-85-390-0022-7", 
            nome_livro: "A Bússola de Ouro",
            nome_autor: "Phillip Pullman",
            editora: "Ponto de Leitura",
            ano_publi: "07/1995",
            status: "disponível"
        })
        console.log("Livro inserido: ", livroInserido1)
    } catch (error) {
        console.log("Erro: ", error)
    }
    
    // Caso de insucesso para inserção de livros (faltam parâmetros)
    try {
        const livroInserido2 = await bibliotecaNegocioLivro.inserirLivros({
            isbn: "978-85-390-0022-7", 
            nome_livro: "A Bússola de Ouro",
            nome_autor: "Phillip Pullman",
            editora: "Ponto de Leitura"
        })
        console.log("Livro inserido: ", livroInserido2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    ///////////////////////////////////////////////////////////////////

    // Caso de sucesso para listagem de livros e clientes
    const listaLivrosClientes = await bibliotecaNegocioLivro.listarLivrosClientes();
    console.log("Lista de Livros: ", listaLivrosClientes);

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para listagem de livros
    const listaLivros = await bibliotecaNegocioLivro.listarLivros();
    console.log("Lista de Livros: ", listaLivros);

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por id (id existente)
    try {
        const buscarIdLivro1 = await bibliotecaNegocioLivro.buscarId(1)
        console.log("Livro Achado por ID: ", buscarIdLivro1)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // Caso de insucesso para buscar por id (id inexistente ou vazio)
    try {
        const buscarIdLivro2 = await bibliotecaNegocioLivro.buscarId(10)
        console.log("Livro Achado por ID: ", buscarIdLivro2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por nome (nome existente)
    try {
        const buscarNomeLivro1 = await bibliotecaNegocioLivro.buscarNome('A Bússola de Ouro')
        console.log("Livro Achado por Nome: ", buscarNomeLivro1)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // Caso de insucesso para buscar por nome (nome vazio)
    try {
        const buscarNomeLivro2 = await bibliotecaNegocioLivro.buscarNome()
        console.log("Livro Achado por Nome: ", buscarNomeLivro2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por status (status existente)
    try {
        const buscarStatusLivro1 = await bibliotecaNegocioLivro.buscarStatus('indisponível')
        console.log("Livro Achado por Status: ", buscarStatusLivro1)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // Caso de insucesso para buscar por status (status vazio)
    try {
        const buscarStatusLivro2 = await bibliotecaNegocioLivro.buscarStatus()
        console.log("Livro Achado por Status: ", buscarStatusLivro2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por autor (autor existente)
    try {
        const buscarAutorLivro1 = await bibliotecaNegocioLivro.buscarAutor('Phillip Pullman')
        console.log("Livro Achado por Autor: ", buscarAutorLivro1)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // Caso de insucesso para buscar por autor (autor vazio)
    try {
        const buscarAutorLivro2 = await bibliotecaNegocioLivro.buscarAutor()
        console.log("Livro Achado por Autor: ", buscarAutorLivro2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para deletar por id (id existente)
    try {
        const deletarLivro1 = await bibliotecaNegocioLivro.deletarLivro(4)
        console.log("Livro deletado: ", deletarLivro1)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // Caso de insucesso para deletar por id (id inexistente ou vazio)
    try {
        const deletarLivro2 = await bibliotecaNegocioLivro.deletarLivro(10)
        console.log("Livro deletado: ", deletarLivro2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para atualizar livro (id existente e parâmetros completos)
    try {
        const livroAtualizado1 = await bibliotecaNegocioLivro.atualizarLivro(2, {
            isbn: "978-85-65765-48-0", 
            nome_livro: "Mentirosos",
            nome_autor: "E. Lockhart",
            editora: "Seguinte",
            ano_publi: "05/2014"
        })
        console.log("Livro Atualizado: ", livroAtualizado1)
    } catch (error) {
        console.log("Erro: ", error)
    }
    
    // Caso de insucesso para atualizar livro (id existente mas parâmetros faltantes)
    try {
        const livroAtualizado2 = await bibliotecaNegocioLivro.atualizarLivro(2, {
            isbn: "978-85-65765-48-0", 
            nome_livro: "Mentirosos",
            nome_autor: "E. Lockhart",
            editora: "Seguinte"
        })
        console.log("Livro Atualizado: ", livroAtualizado2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // Caso de insucesso para atualizar livro (id inexistente mas parâmetros completos)
    try {
        const livroAtualizado2 = await bibliotecaNegocioLivro.atualizarLivro(5, {
            isbn: "978-85-62409-88-2", 
            nome_livro: "A Garota do Lago",
            nome_autor: "Charlie Donlea",
            editora: "Faro Editorial",
            ano_publi: "02/2017",
            status: "disponível"
        })
        console.log("Livro Atualizado: ", livroAtualizado2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // RETIRANDO UM LIVRO DA BIBLIOTECA
    try {
        await bibliotecaPersistenciaLivro.retirarLivros(4, 1)
        console.log("Livro retirado com sucesso!")
    } catch (error) {
        console.log(error)
    }

    // DEVOLVENDO UM LIVRO DA BIBLIOTECA
    await bibliotecaPersistenciaLivro.devolverLivros(3)
    console.log("Livro devolvido com sucesso!")

}

main()