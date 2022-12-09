const bibliotecaPersistenciaLivro = require('./persistencia/livro_persistencia')
const bibliotecaNegocioLivro = require('./negocio/livro_negocio');

async function main() {
    const listaLivrosClientes = await bibliotecaNegocioLivro.listarLivrosClientes();
    console.log("Lista de Livros: ", listaLivrosClientes);
}

main()