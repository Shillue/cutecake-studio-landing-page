export function toggleCatalogo(){
    const catalogo = document.querySelector('.catalogo__conteudo');
    const botao = document.querySelector('.catalogo__toggle');

    botao.addEventListener('click', () => {
        const aberto = catalogo.classList.toggle('aberto');

        botao.classList.toggle('aberto', aberto);
        
        if(aberto){
            botao.textContent = 'Ver menos';
        } else {
            botao.textContent = 'Ver todos';
        }
    });
}