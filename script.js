const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');

verDetallesButton.addEventListener('click', () => {
    tarjeta.style.transform = 'rotateY(180deg)';
});

volverButton.addEventListener('click', () => {
    tarjeta.style.transform = 'rotateY(0deg)';
});

tarjeta.addEventListener('mouseenter', () => {
    tarjeta.style.transform = 'rotateY(180deg)';
});

tarjeta.addEventListener('mouseleave', () => {
    tarjeta.style.transform = 'rotateY(0deg)';
});