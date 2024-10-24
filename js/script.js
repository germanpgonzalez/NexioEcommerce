const contenedorProductos = document.querySelector("#lista-productos");

const obtenerProductos = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
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

obtenerProductos();
