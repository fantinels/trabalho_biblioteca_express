const bibliotecaPersistencia = require('./persistencia/biblioteca_persistencia')

async function main() {

    // VER COM O SOR COMO TRATAR CASOS DE SUCESSO E INSUCESSO

    // RETIRANDO UM LIVRO DA BIBLIOTECA
    await bibliotecaPersistencia.retirarLivros(1, 2)
    console.log("Livro retirado com sucesso!")

    // DEVOLVENDO UM LIVRO DA BIBLIOTECA
    await bibliotecaPersistencia.devolverLivros(10)
    console.log("Livro devolvido com sucesso!")
    
}

main()