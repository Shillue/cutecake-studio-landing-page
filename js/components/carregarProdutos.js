import { criarCard } from "./criarCard.js";

export async function carregarProdutos() {
    const resposta = await fetch('./js/data/produtos.json');
    const produtos = await resposta.json();

    const productsList = document.querySelector('.products__list');

    produtos.forEach(produto => {
        const card = criarCard(produto);

        productsList.appendChild(card);
    })
}

