const bibliotecaPersistenciaCliente = require('../persistencia/cliente_persistencia')
const {validarCliente} = require('./validacao')

// Validação para INSERIR CLIENTES
async function inserirCliente(clientes) {
    if(clientes && clientes.nome_cliente && clientes.matricula && clientes.telefone) {
        const produtoInserido = await bibliotecaPersistenciaCliente.inserirCliente(clientes)
        return produtoInserido;
    }
    else {
        throw {id: 400, msg: "Falta parâmetros"};
    }
}

/////////////////////////////////////////////////////////////////////

// Validação para LISTAR CLIENTES
async function listarCliente() {
  return await bibliotecaPersistenciaCliente.listarCliente()
}

/////////////////////////////////////////////////////////////////////

// Validação para BUSCAR POR ID DE CLIENTES
async function buscarPorIdCliente(clientes) {
  const idProcuradoCliente = await bibliotecaPersistenciaCliente.buscarPorIdCliente(clientes);
  if(!idProcuradoCliente) {
      throw {id: 404, msg: "Id do cliente não encontrado"};
  }
  return idProcuradoCliente;

}

/////////////////////////////////////////////////////////

// Validação para ATUALIZAR CLIENTES
async function atualizarCliente(id, clientes) {
  if(validarCliente(clientes)) {
      const clienteAtualizado = await buscarPorIdCliente(id);

      if(clienteAtualizado) {
          return await bibliotecaPersistenciaCliente.atualizarClientes(id, clientes);
      }
      
  }
  else {
      throw {id: 400, msg: "Parâmetros incompletos"};
  }
  
}

/////////////////////////////////////////////////////////

// Validação para DELETAR CLIENTES
async function deletarCliente(id) {
  const deletadoCliente = await bibliotecaPersistenciaCliente.deletarCliente(id);
  if (!deletadoCliente) {
      throw {id: 404, msg: "Cliente não encontrado"};
  }

  return deletadoCliente;
}

module.exports = {
  inserirCliente,
  listarCliente,
  buscarPorIdCliente,
  atualizarCliente,
  deletarCliente
}