export function categorias(atualizarCarrossel){
    const botoes = document.querySelectorAll('.btn__categ');
    const produtos = document.querySelectorAll('.product__card');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const categoriaSelecionada = botao.dataset.category;

            // muda o botão ativo
            botoes.forEach(botao => {
                botao.classList.remove('active');
            });

            botao.classList.add('active');

            // filtra os produtos
            produtos.forEach(produto => {
                if(categoriaSelecionada === 'todos' || produto.dataset.category === categoriaSelecionada){
                    produto.style.display = '';
                } else {
                    produto.style.display = 'none';
                }
            });
            // recalcula o carrossel e volta para o primeiro card
            atualizarCarrossel(true);
        });
    });
}