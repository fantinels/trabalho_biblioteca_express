
const bibliotecaPersistencia = require('./persistencia_livro/biblioteca_persistencia')
const bibliotecaNegocio = require('./negocio_livro/biblioteca_negocio');
const bibliotecaPersistenciacliente = require('./persistencia_cliente/biblioteca_persistencia')
const bibliotecaNegociocliente = require('./negocio_cliente/biblioteca_negocio');

async function main() {

    // Caso de sucesso para inserção de livros (todos parâmetros preenchidos)
    // try {
    //     const livroInserido1 = await bibliotecaNegocio.inserirLivros({
    //         isbn: "978-85-62409-88-2", 
    //         nome_livro: "A Garota do Lago",
    //         nome_autor: "Charlie Donlea",
    //         editora: "Faro Editorial",
    //         ano_publi: "02/2017",
    //         status: "disponível"
    //     })
    //     console.log("Livro inserido: ", livroInserido1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }
    
    // Caso de insucesso para inserção de livros (faltam parâmetros)
    // try {
    //     const livroInserido2 = await bibliotecaNegocio.inserirLivros({
    //         isbn: "978-85-390-0022-7", 
    //         nome_livro: "A Bússola de Ouro",
    //         nome_autor: "Phillip Pullman",
    //         editora: "Ponto de Leitura"
    //     })
    //     console.log("Livro inserido: ", livroInserido2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para listagem de livros
    // const listaLivros = await bibliotecaNegocio.listarLivros()
    // console.log("Lista de livros: ", listaLivros)

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por id (id existente)
    // try {
    //     const buscarIdLivro1 = await bibliotecaNegocio.buscarId(1)
    //     console.log("Livro Achado por ID: ", buscarIdLivro1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // Caso de insucesso para buscar por id (id inexistente ou vazio)
    // try {
    //     const buscarIdLivro2 = await bibliotecaNegocio.buscarId(10)
    //     console.log("Livro Achado por ID: ", buscarIdLivro2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por nome (nome existente)
    // try {
    //     const buscarNomeLivro1 = await bibliotecaNegocio.buscarNome('A Bússola de Ouro')
    //     console.log("Livro Achado por Nome: ", buscarNomeLivro1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // Caso de insucesso para buscar por nome (nome vazio)
    // try {
    //     const buscarNomeLivro2 = await bibliotecaNegocio.buscarNome()
    //     console.log("Livro Achado por Nome: ", buscarNomeLivro2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por status (status existente)
    // try {
    //     const buscarStatusLivro1 = await bibliotecaNegocio.buscarStatus('disponível')
    //     console.log("Livro Achado por Status: ", buscarStatusLivro1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // Caso de insucesso para buscar por status (status vazio)
    // try {
    //     const buscarStatusLivro2 = await bibliotecaNegocio.buscarStatus()
    //     console.log("Livro Achado por Status: ", buscarStatusLivro2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por autor (autor existente)
    // try {
    //     const buscarAutorLivro1 = await bibliotecaNegocio.buscarAutor('Phillip Pullman')
    //     console.log("Livro Achado por Autor: ", buscarAutorLivro1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // Caso de insucesso para buscar por autor (autor vazio)
    // try {
    //     const buscarAutorLivro2 = await bibliotecaNegocio.buscarAutor()
    //     console.log("Livro Achado por Autor: ", buscarAutorLivro2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para deletar por id (id existente)
    // try {
    //     const deletarLivro1 = await bibliotecaNegocio.deletarLivro(3)
    //     console.log("Livro deletado: ", deletarLivro1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // Caso de insucesso para deletar por id (id inexistente ou vazio)
    // try {
    //     const deletarLivro2 = await bibliotecaNegocio.deletarLivro(10)
    //     console.log("Livro deletado: ", deletarLivro2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para atualizar livro (id existente e parâmetros completos)
    // try {
    //     const livroAtualizado1 = await bibliotecaNegocio.atualizarLivro(2, {
    //         isbn: "978-85-65765-48-0", 
    //         nome_livro: "Mentirosos",
    //         nome_autor: "E. Lockhart",
    //         editora: "Seguinte",
    //         ano_publi: "05/2014"
    //     })
    //     console.log("Livro Atualizado: ", livroAtualizado1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }
    
    // // Caso de insucesso para atualizar livro (id existente mas parâmetros faltantes)
    // try {
    //     const livroAtualizado2 = await bibliotecaNegocio.atualizarLivro(2, {
    //         isbn: "978-85-65765-48-0", 
    //         nome_livro: "Mentirosos",
    //         nome_autor: "E. Lockhart",
    //         editora: "Seguinte"
    //     })
    //     console.log("Livro Atualizado: ", livroAtualizado2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // // Caso de insucesso para atualizar livro (id inexistente mas parâmetros completos)
    // try {
    //     const livroAtualizado2 = await bibliotecaNegocio.atualizarLivro(5, {
    //         isbn: "978-85-62409-88-2", 
    //         nome_livro: "A Garota do Lago",
    //         nome_autor: "Charlie Donlea",
    //         editora: "Faro Editorial",
    //         ano_publi: "02/2017",
    //         status: "disponível"
    //     })
    //     console.log("Livro Atualizado: ", livroAtualizado2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }
//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=


//      CLIENTE



//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=

        // Caso de sucesso para listagem de cliente
        // const listarClientes = await bibliotecaPersistenciacliente.listarCliente();
        // console.log("Lista de Clientes",listarClientes);
//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=



        // Caso de sucesso para inserção de livros (todos parâmetros preenchidos)
        // try {
        //         const clienteInserido = await bibliotecaPersistenciacliente.inserirCliente({
        //             id_cliente: 3, 
        //             nome_cliente: "vivi",
        //             matricula: "676599", 
        //             telefone:"096478"
        //         })
        //         console.log("Livro inserido: ", clienteInserido)
        // } catch (error) {
        //         console.log("Erro: ", error)
        // }
    // Caso de insucesso para inserção de livros (faltam parâmetros)
        try {
             const clienteInserido = await bibliotecaNegociocliente.inserirCliente({
                id_cliente: 3, 
                nome_cliente: "vivi",
                matricula: "676599", 

            })
            console.log("cliente inserido: ", clienteInserido)
    } catch (error) {
            console.log("Erro: ", error)
    }



//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=



//Buscar com id do cliente com susseso
//     try {
//         const buscarClientes = await bibliotecaPersistenciacliente.buscarPorIdCliente({id_cliente: 1});
//         console.log("Cliente achado por ID: ", buscarClientes)
// } catch (error) {
//        console.log("Erro: ", error)
// }

 // Caso de insucesso para buscar pro id do cliente por autor (autor vazio)
    try {
        const buscarClientes2 = await bibliotecaNegociocliente.buscarPorIdCliente({id_cliente: 7});
        console.log("Cliente achado por ID: ", buscarClientes2)
    } catch (error) {
        console.log("Erro: ", error)
    }

//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=
        // Caso de sucesso para listagem de cliente
        // const listarClientes = await bibliotecaPersistenciacliente.listarCliente();
        // console.log("Lista de Clientes",listarClientes);
//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=
// atualizar Clientes com sucesso
    // try{
    //     const clienteAtualizado = await bibliotecaPersistenciacliente.atualizarClientes(2, {
    //         nome_cliente: "Paola",
    //         telefone: "97458-9658"
    //     }) 
    //     console.log("Cliente atualizado: ", clienteAtualizado)
    // } catch(error){
    //     console.log("Erro: ", error) 
    // }
// // atualizar Clientes insucesso
    try{
        const clienteAtualizado2 = await bibliotecaNegociocliente.atualizarClientes(3, {
            nome_cliente: "Paola",
            telefone: " "

        })
        console.log("Cliente atualizado: ", clienteAtualizado2)
    } catch(error){
        console.log("Erro: ", error) 
    }



//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=
// //deletando cliente com sucesso 
//     try{
//         const clienteDeletado = await bibliotecaPersistenciacliente.deletarCliente({id_cliente: 4});
//         console.log("Cliente deletado: ", clienteDeletado);
//     }catch(error){
//         console.log("Error: ",error)
//     }
// // Deletado insucesso 
     try{
         const clienteDeletado2 = await bibliotecaNegociocliente.deletarCliente(20);
         console.log("Cliente deletado: ", clienteDeletado2);
     }catch(error){
         console.log("Error: ",error)
     }


}
main()