const cabecalho = document.querySelector('.CABECALHO');

function checkScroll() {

    let scrollPosition = window.scrollY;


    if (scrollPosition > 0) {
        cabecalho.classList.add('scroll-background');
    } else {
        cabecalho.classList.remove('scroll-background');
    }
}

window.addEventListener('scroll', checkScroll);
