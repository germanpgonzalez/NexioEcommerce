const contenedorProductos = document.querySelector("#lista-productos");
const btnjoyas = document.querySelector(".boton-joyas");
const btntodos = document.querySelector(".boton-todos");
const btnhombre = document.querySelector(".boton-ropa-hombre");
const btnmujer = document.querySelector(".boton-ropa-mujer");
const btnelectronica = document.querySelector(".boton-electronica")
const urlDefecto = 'https://fakestoreapi.com/products';


document.addEventListener("DOMContentLoaded", () => {
  obtenerProductos('https://fakestoreapi.com/products');
})

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
            <button class="btn btn-primary btn-lg">Comprar</button>
            `;
      contenedorProductos.appendChild(elemento);
    });
  } catch {
    throw new Error("error");
  }
};


btntodos.addEventListener("click", () => obtenerProductos('https://fakestoreapi.com/products'));
btnjoyas.addEventListener('click', () => obtenerProductos('https://fakestoreapi.com/products/category/jewelery'));
btnelectronica.addEventListener("click", () => obtenerProductos('https://fakestoreapi.com/products/category/electronics'));
btnhombre.addEventListener('click', () => obtenerProductos(`https://fakestoreapi.com/products/category/men's%20clothing`));
btnmujer.addEventListener("click", () => obtenerProductos(`https://fakestoreapi.com/products/category/women's%20clothing`))

