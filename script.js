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

document.addEventListener('click', function(event) {
    var minhaDiv = document.getElementById('pesquisa');
    var meuInput = document.getElementById('barra');
    
    var isClickInsideDiv = minhaDiv.contains(event.target);
    if (!isClickInsideDiv) {
        meuInput.value = '';
    }
});