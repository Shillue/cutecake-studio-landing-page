export function criarCard(produto){
    const card = document.createElement('li');

        card.classList.add('product__card');
        card.dataset.category = produto.categoria;

        card.innerHTML = `
            <div class="product__card__img">
                <img src="${produto.imagem}" alt="${produto.nome}" />
            </div>
            <div class="product__card__dados">
                <div class="card__apresent">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                </div>
                <div class="card__infor">
                    <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                    <a href="#" class="ver_mais" aria-label="Ver mais sobre o bolo ${produto.nome}">
                        <i class="fa-solid fa-plus"></i>
                    </a>
                </div>
            </div>
        `;
        return card;
}