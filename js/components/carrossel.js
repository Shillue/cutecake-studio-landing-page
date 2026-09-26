export function carrossel(){
    const productsList = document.querySelector('.products__list');
const products = document.querySelectorAll('.product__card');

const prevButton = document.querySelector('.products__arrow--prev');
const nextButton = document.querySelector('.products__arrow--next');

let currentPosition = 0;
let maxPosition = 0;

const cardWidth = products[0].offsetWidth;
const gap = parseFloat(getComputedStyle(productsList).gap);

const step = cardWidth + gap;


function updateButtons() {
    prevButton.disabled = currentPosition <= 0;
    nextButton.disabled = currentPosition >= maxPosition;
}


function atualizarLimite(reset = false){
    const visibleWidth = productsList.parentElement.offsetWidth;
    const totalWidth = productsList.scrollWidth;

    maxPosition = Math.max(0, totalWidth - visibleWidth);

    // volta para o primeiro card quando uma categoria é selecionada
    if(reset){
        currentPosition = 0;
    }

    // garante que a posição nunca ultrapasse o limite
    if(currentPosition > maxPosition){
        currentPosition = maxPosition;
    }

    productsList.style.transform = `translateX(-${currentPosition}px)`;

    updateButtons();
}


function moveNext(){
    currentPosition += step;

    if(currentPosition > maxPosition){
        currentPosition = maxPosition;
    }

    productsList.style.transform = `translateX(-${currentPosition}px)`;

    updateButtons();
}

function movePrev(){
    currentPosition -= step;

    if(currentPosition < 0){
        currentPosition = 0;
    }

    productsList.style.transform = `translateX(-${currentPosition}px)`;

    updateButtons();
}

nextButton.addEventListener('click', moveNext);
prevButton.addEventListener('click', movePrev);



atualizarLimite();
return{
    atualizarLimite
};
}
