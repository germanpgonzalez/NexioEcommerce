// Declaro constantes
const carrito = [];
const contenedorProductos = document.querySelector("#lista-productos");
const btnjoyas = document.querySelector(".boton-joyas");
const btntodos = document.querySelector(".boton-todos");
const btnhombre = document.querySelector(".boton-ropa-hombre");
const btnmujer = document.querySelector(".boton-ropa-mujer");
const btnelectronica = document.querySelector(".boton-electronica");


// Hago el fetch por defecto a todos los productos cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
  obtenerProductos('https://fakestoreapi.com/products');
})

const addToCart = (producto) => {
  carrito.push(producto);
  console.log(carrito);
}


//Fetch de productos y cards dinámicas
const obtenerProductos = async (url) => {

  contenedorProductos.innerHTML = "";

  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((producto) => {
      const elemento = document.createElement("div");
      elemento.classList.add("card");
      elemento.innerHTML = `
            <img class="card-imagen" src=${producto.image} alt=${producto.title}>
            <h3 class="card-title">${producto.title}</h3>
            <p class="card-precio">Precio: $<strong>${producto.price}</strong></p>
            <button class="btn btn-primary btn-lg btnComprar">Comprar</button>
            `;
      contenedorProductos.appendChild(elemento);
      // Obtengo el botón comprar creado dinámicamente y le agrego el addEventListener de cada card
      const buttonComprar = elemento.querySelector(".btnComprar");
      buttonComprar.addEventListener("click", () => addToCart(producto));
    });
  } catch {
    throw new Error("error");
  }
};



btntodos.addEventListener("click", () => obtenerProductos('https://fakestoreapi.com/products'));
btnjoyas.addEventListener("click", () => obtenerProductos('https://fakestoreapi.com/products/category/jewelery'));
btnelectronica.addEventListener("click", () => obtenerProductos('https://fakestoreapi.com/products/category/electronics'));
btnhombre.addEventListener("click", () => obtenerProductos(`https://fakestoreapi.com/products/category/men's%20clothing`));
btnmujer.addEventListener("click", () => obtenerProductos(`https://fakestoreapi.com/products/category/women's%20clothing`));




//Modal Menú

// document.addEventListener("DOMContentLoaded", () => {
//   btnMenu = document.querySelector('.bi-list');
//   modalMenu = document.getElementById('modalMenu');

//   btnMenu.addEventListener('click', () => toggleMenu());

//   function toggleMenu(){
//     modalMenu.style.display = modalMenu.style.display === 'flex' ? 'none' : 'flex';
//   }


//   modalMenu.addEventListener("click", (e) => {
//     if (e.target === modalMenu) {
//         modalMenu.style.display = 'none';
//     }
//   });
// })


document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById('iconHamburguer');
  const enlaces = document.querySelector('.lista-links');

  btnMenu.addEventListener('click', () => {
    enlaces.classList.toggle('show')
    console.log("aprieto btnMenu")
  })

})

