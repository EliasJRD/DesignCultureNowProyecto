const botones_autores = document.querySelectorAll('.autor-btn');
const contenidos_autores = document.querySelectorAll('.contenido-info');

botones_autores.forEach(boton => {
    boton.addEventListener('click', () => {
        botones_autores.forEach(b => b.classList.remove('activo'));
        
        contenidos_autores.forEach(c => c.classList.remove('activo'));
        
        boton.classList.add('activo');
        
        const targetId = boton.getAttribute('data-target');
        
        document.getElementById(targetId).classList.add('activo');
    });
});

const botones_gal = document.querySelectorAll('.gal-btn');
const imagen_gal = document.querySelectorAll('.galeria-img');

botones_gal.forEach(boton => {
    boton.addEventListener('click', () => {
        botones_gal.forEach(b => b.classList.remove('activo'));
        
        imagen_gal.forEach(c => c.classList.remove('activo'));
        
        boton.classList.add('activo');
        
        const targetId = boton.getAttribute('data-target');
        
        document.getElementById(targetId).classList.add('activo');
    });
});