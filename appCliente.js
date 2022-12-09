const bibliotecaPersistenciaCliente = require('./persistencia/cliente_persistencia')
const bibliotecaNegocioCliente = require('./negocio/cliente_negocio');

async function main() {

//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=
//  CLIENTE
//-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=-=-==-==-=-==-=

    // Caso de sucesso para inserção de clientes (todos parâmetros preenchidos)
    try {
        const clienteInserido = await bibliotecaNegocioCliente.inserirCliente({
            nome_cliente: "Poliana",
            matricula: "444444", 
            telefone:"91458-4581"
        })
        console.log("Cliente inserido: ", clienteInserido)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // Caso de insucesso para inserção de clientes (faltam parâmetros)
    try {
        const clienteInserido = await bibliotecaNegocioCliente.inserirCliente({
            nome_cliente: "vivi",
            matricula: "676599", 
        })
        console.log("cliente inserido: ", clienteInserido)
    } catch (error) {
        console.log("Erro: ", error)
    }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para listagem de clientes
    const listarClientes = await bibliotecaNegocioCliente.listarCliente();
    console.log("Lista de Clientes",listarClientes);

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para buscar por id (id existente)
    try {
        const buscarClientes = await bibliotecaNegocioCliente.buscarPorIdCliente(1);
        console.log("Cliente achado por ID: ", buscarClientes)
    } catch (error) {
        console.log("Erro: ", error)
    }

    // Caso de insucesso para buscar por id do cliente (id inexistente ou vazio)
    try {
        const buscarClientes2 = await bibliotecaNegocioCliente.buscarPorIdCliente(10);
        console.log("Cliente achado por ID: ", buscarClientes2)
    } catch (error) {
        console.log("Erro: ", error)
    }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para atualizar cliente (id existente e parâmetros completos)
    try{
        const clienteAtualizado = await bibliotecaNegocioCliente.atualizarCliente(2, {
            nome_cliente: "Gabi",
            matricula: "784556",
            telefone: "97458-9658"
        }) 
        console.log("Cliente atualizado: ", clienteAtualizado)
    } catch(error){
        console.log("Erro: ", error) 
    }

    // Caso de insucesso para atualizar cliente (id existente mas parâmetros faltantes)
    try{
        const clienteAtualizado2 = await bibliotecaNegocioCliente.atualizarCliente(3, {
            nome_cliente: "Gabi",
            telefone: ""

        })
        console.log("Cliente atualizado: ", clienteAtualizado2)
    } catch(error){
        console.log("Erro: ", error) 
    }

    // Caso de insucesso para atualizar cliente (id inexistente mas parâmetros completos)
    try{
        const clienteAtualizado2 = await bibliotecaNegocioCliente.atualizarCliente(7, {
            nome_cliente: "Paola",
            matricula: "784112",
            telefone: "95413-6584"

        })
        console.log("Cliente atualizado: ", clienteAtualizado2)
    } catch(error){
        console.log("Erro: ", error) 
    }

    /////////////////////////////////////////////////////////////////////

    // Caso de sucesso para deletar por id (id existente)
    try{
        const clienteDeletado = await bibliotecaNegocioCliente.deletarCliente(5);
        console.log("Cliente deletado: ", clienteDeletado);
    }catch(error){
        console.log("Erro: ",error)
    }

    // Caso de insucesso para deletar por id (id inexistente ou vazio)
     try{
         const clienteDeletado2 = await bibliotecaNegocioCliente.deletarCliente(20);
         console.log("Cliente deletado: ", clienteDeletado2);
     }catch(error){
         console.log("Erro: ",error)
     }

}

main()