export function menu() {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuLeft = document.querySelector('.menu__left');
    const links = document.querySelectorAll('.menu__left__link');

    menuToggle.addEventListener('click', () => {
        const aberto = menuLeft.classList.toggle('aberto');

        menuToggle.setAttribute(
            'aria-label',
            aberto ? 'Fecha menu' : 'Abri menu'
        );

        menuToggle.innerHTML = aberto ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menuLeft.classList.remove('aberto');
            menuToggle.setAttribute('aria-label', 'Abrir menu');

            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        })
    })
}