// Validar se pegou todos os dados para atualização
function validarCliente(clientes) {
  return clientes && clientes.nome_cliente && clientes.matricula &&
      clientes.telefone 
}


module.exports = {
  validarCliente
}