const bibliotecaPersistenciaLivro = require('../persistencia/livro_persistencia')
const {validarLivro} = require('./validacao')

// Validação para INSERIR LIVROS
async function inserirLivros(livros) {
    if(livros && livros.isbn && livros.nome_livro && livros.nome_autor && livros.editora && livros.ano_publi && livros.status) {
        const produtoInserido = await bibliotecaPersistenciaLivro.inserirLivros(livros)
        return produtoInserido;
    }
    else {
        throw {id: 400, msg: "Falta parâmetros"};
    }
}

/////////////////////////////////////////////////////////////////////

// Validação para LISTAR LIVROS E CLIENTES
async function listarLivrosClientes() {
    return await bibliotecaPersistenciaLivro.listarLivrosClientes()
}

/////////////////////////////////////////////////////////////////////

// Validação para LISTAR LIVROS
async function listarLivros() {
    return await bibliotecaPersistenciaLivro.listarLivros()
}

/////////////////////////////////////////////////////////////////////

// Validação para BUSCAR POR ID DE LIVROS
async function buscarId(idLivro) {
    const idProcurado = await bibliotecaPersistenciaLivro.buscarPorIdLivros(idLivro);
    if(!idProcurado) {
        throw {id: 404, msg: "Livro não encontrado"};
    }

    return idProcurado;

}

/////////////////////////////////////////////////////////////////////

// Validação para BUSCAR POR NOME DE LIVROS
async function buscarNome(nomeLivro) {
    if (!nomeLivro) {
        throw {id: 400, msg: "Falta parâmetro no nome"};
    }

    return await bibliotecaPersistenciaLivro.buscarPorNomeLivros(nomeLivro);
}

/////////////////////////////////////////////////////////////////////

// Validação para BUSCAR POR STATUS DE LIVROS
async function buscarStatus(statusLivro) {
    if (!statusLivro) {
        throw {id: 400, msg: "Falta parâmetro no status"};
    }

    return await bibliotecaPersistenciaLivro.buscarPorStatusLivros(statusLivro);
}

/////////////////////////////////////////////////////////////////////

// Validação para BUSCAR POR AUTOR DE LIVROS
async function buscarAutor(autorLivro) {
    if (!autorLivro) {
        throw {id: 400, msg: "Falta parâmetro no nome do autor"};
    }

    return await bibliotecaPersistenciaLivro.buscarPorAutorLivros(autorLivro);
}

/////////////////////////////////////////////////////////////////////

// Validação para DELETAR UM LIVRO
async function deletarLivro(idLivro) {
    const livroDeletado = await bibliotecaPersistenciaLivro.deletarLivros(idLivro);
    if(!livroDeletado) {
        throw {id: 404, msg: "Livro não encontrado"};
    }

    return livroDeletado;

}

/////////////////////////////////////////////////////////////////////

// Validação para ATUALIZAR LIVROS
async function atualizarLivro(id, livros) {
    if (validarLivro(livros)) {
        const livroAtualizado = await buscarId(id);

        if (livroAtualizado) {
            return await bibliotecaPersistenciaLivro.atualizarLivros(id, livros)
        }
    }
    else {
        throw {id: 400, msg: "Falta parâmetros"};
    }
}

/////////////////////////////////////////////////////////////////////

// Validação para RETIRAR UM LIVRO
async function retiraLivro(matricula, id_livro) {
    console.log('Verificando se este livro existe em nosso sistema ...');
    const livroExiste = await buscarId(id_livro);

    if (livroExiste) {
        console.log('Livro Existente! Prosseguindo...')
    }

    console.log('Verificando se o livro está disponível ...')
    const livroDisp = await bibliotecaPersistenciaLivro.verificaDisponibilidade(id_livro);

    if (!livroDisp) {
        console.log('Livro INDISPONÍVEL! Não pode ser retirado!');
        return
    }

    console.log('Registrando o aluguel do livro ...');
    const retirada = await bibliotecaPersistenciaLivro.retirarLivros(matricula, id_livro);

    if (retirada) {
        console.log('Livro retirado com sucesso');
    }

    console.log('Atualizando status do livro ...');
    const status = await bibliotecaPersistenciaLivro.indisponibilizaLivro(id_livro);

    if (status) {
        console.log('Aluguel registrado com sucesso');
    }
}

/////////////////////////////////////////////////////////////////////

// Validação para DEVOLVER UM LIVRO
async function devolveLivro(id_livro) {
    const livroDevolvido = await buscarId(id_livro);

    if (livroDevolvido) {
        console.log('Redisponibilizando livro ...')
        await bibliotecaPersistenciaLivro.disponibilizaLivro(id_livro);

        console.log('Registrando devolução ...');
        await bibliotecaPersistenciaLivro.devolverLivros(id_livro);
    }
}

module.exports = {
    inserirLivros,
    listarLivrosClientes,
    listarLivros,
    buscarId,
    buscarNome,
    buscarStatus,
    buscarAutor,
    deletarLivro,
    atualizarLivro,
    retiraLivro,
    devolveLivro
}