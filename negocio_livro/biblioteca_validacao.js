// Validar se pegou todos os dados para atualização
function validarLivro(livros) {
    return livros && livros.isbn && livros.nome_livro && livros.nome_autor &&
        livros.editora && livros.ano_publi
}

// blalbalbalbala

module.exports = {
    validarLivro
}