const livroPersistencia = require('./persistencia_livro/biblioteca_persistencia')
const clientePersistencia = require('./persistencia_cliente/biblioteca_persistencia')

async function main() {

    // VER COM O SOR COMO TRATAR CASOS DE SUCESSO E INSUCESSO

    // RETIRANDO UM LIVRO DA BIBLIOTECA
    // await livroPersistencia.retirarLivros(1, 2)
    // console.log("Livro retirado com sucesso!")

    // DEVOLVENDO UM LIVRO DA BIBLIOTECA
    // await livroPersistencia.devolverLivros(10)
    // console.log("Livro devolvido com sucesso!")

    //////////////////////////////////////////////////////////////////

    // ÁREA CLIENTE
    // INSERINDO CLIENTES
    const clienteInserido = await clientePersistencia.inserirCliente({
        id_cliente: 4, 
        nome_cliente: "vivi",
        matricula: "676599", 
        telefone:"096478"
    })
    console.log("Cliente Inserido: ", clienteInserido);

    // LISTANDO CLIENTES
    const listarClientes = await clientePersistencia.listarCliente();
    console.log("Lista de Clientes",listarClientes);

    // BUSCANDO POR ID DE CLIENTES
    const buscarClientes = await clientePersistencia.buscarPorIdCliente({id_cliente: 1});
    console.log("Cliente achado por ID: ", buscarClientes)

    // DELETANDO CLIENTES
    const clienteDeletado = await clientePersistencia.deletarCliente({id_cliente: 3});
    console.log("Cliente deletado: ", clienteDeletado);

    // ATUALIZANDO CLIENTES
    const clienteAtualizado = await clientePersistencia.atualizarClientes(2, {
        nome_cliente: "paola",
        telefone: "97458-9658"
    })
    console.log("Cliente atualizado: ", clienteAtualizado)
    
}

main()