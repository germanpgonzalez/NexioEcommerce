
// Script Menú

document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById('iconHamburguer');
    const enlaces = document.querySelector('.lista-links');
  
    btnMenu.addEventListener('click', () => {
      enlaces.classList.toggle('show')
    })
  
  })
  