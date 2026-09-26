import { criarCard } from "./criarCard.js";

export async function carregarCatalogo() {
    const resposta = await fetch('./js/data/produtos.json');
    const produtos = await resposta.json();

    const catalogo = document.querySelector('.catalogo__conteudo');

    const categorias = [
        'classicos',
        'bento',
        'coloridos',
        'cake-to-go',
        'no-copo'
    ];


    const nomesCategorias = {
        'classicos': 'Clássicos',
        'bento': 'Bentos',
        'coloridos': 'Coloridos',
        'cake-to-go': 'Cake to go',
        'no-copo': 'No copo'
    };
 
    categorias.forEach(categoria => {
        const produtosCategoria = produtos.filter(
            produto => produto.categoria === categoria
        );

        if(produtosCategoria.length === 0){
            return;
        }

        const titulo = document.createElement('div');
        titulo.classList.add('catalogo__categoria');

        titulo.innerHTML =`
            <h2>${nomesCategorias[categoria]}</h2>
        `;

        const lista = document.createElement('ul');
        lista.classList.add('catalogo__list');

        produtosCategoria.forEach(produto =>{
            const card = criarCard(produto);

            lista.appendChild(card);
        });

        catalogo.appendChild(titulo);
        catalogo.appendChild(lista);
    })
}