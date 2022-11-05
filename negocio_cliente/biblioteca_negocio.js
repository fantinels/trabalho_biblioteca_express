const bibliotecaPersistenciacliente = require('../persistencia_cliente/biblioteca_persistencia')
const {validarCliente} = require('./biblioteca_validacao')

/////////////////////////////////////////////////////////////////////
// Validação para INSERIR LIVROS
async function inserirCliente(clientes) {
  if(clientes && clientes.id_cliente && clientes.nome_cliente && clientes.matricula && clientes.editora && clientes.telefone) {
      const produtoInserido = await bibliotecaPersistenciacliente.inserirCliente(clientes)
      return produtoInserido;
  }
  else {
      throw {id: 400, msg: "Falta parâmetros"};
  }
}
/////////////////////////////////////////////////////////////////////

// Validação para LISTAR LIVROS
async function listarCliente() {
  return await bibliotecaPersistenciacliente.listarCliente()
}
/////////////////////////////////////////////////////////////////////
// Validação para BUSCAR POR ID DE LIVROS
async function buscarPorIdCliente(clientes) {
  const idProcuradoCliente = await bibliotecaPersistenciacliente.buscarPorIdCliente(clientes);
  if(!idProcuradoCliente) {
      throw {id: 404, msg: "id do cliente não encontrado"};
  }
  return idProcurado;

}

/////////////////////////////////////////////////////////
//Atualizando cliente 
async function atualizarClientes(id, clientes) {
  if(validarCliente(clientes)) {
      const clienteAtualizado = await buscarPorIdCliente(id);

      if(clienteAtualizado) {
          return await bibliotecaPersistenciacliente.atualizarClientes(id, clientes);
      }
      
  }
  else {
      throw {id: 400, msg: "Parâmetros inválidos ou incompletos"};
  }
  
}

/////////////////////////////////////////////////////////
//Deletando cliente 
async function deletarCliente(id) {
  const deletadonCliente = await bibliotecaPersistenciacliente.deletarCliente(id);
  if (!deletadonCliente) {
      throw {id: 404, msg: "cliente não encontrado"};
  }

  return deletadonCliente;
}

module.exports = {
  inserirCliente,
  listarCliente,
  buscarPorIdCliente,
  atualizarClientes,
  deletarCliente
}