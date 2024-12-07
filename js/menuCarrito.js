import { carrito } from "./script.js";

const menuCarrito = document.getElementById("menuCarrito");
const iconoCarrito = document.getElementById("id-carrito");

const tablaCarrito = document.querySelector(".tablaCarrito");

iconoCarrito.addEventListener("click", () => {
  menuCarrito.classList.toggle("show");
});



export const renderizarCarrito = () => {

    const mensajeVacío = document.querySelector(".mensaje-vacio");
    const tablaCarrito = document.querySelector(".tablaCarrito");
    const thElements = document.querySelectorAll("th");
    const botones = document.querySelectorAll(".btn-limpiar-carrito, .btn-comprar"); 

    
    if (carrito.length === 0) {
        mensajeVacío.style.display = "block"; 
        thElements.forEach((th) => th.style.display = "none"); 
        botones.forEach((btn) => btn.style.display = "none"); 
        const filasProductos = document.querySelectorAll(".carritoProducto");
        filasProductos.forEach((fila) => fila.remove()); 
        return;
    } else {
        
        mensajeVacío.style.display = "none";
        thElements.forEach((th) => th.style.display = "table-cell"); 
        botones.forEach((btn) => btn.style.display = "inline-block"); 
    }

    // Limpiar filas previas, excepto el encabezado
    const filasProductos = document.querySelectorAll(".carritoProducto");
    filasProductos.forEach((fila) => fila.remove());
  
    // Crear una nueva fila para cada producto en el carrito
    carrito.forEach((producto) => {
      const fila = document.createElement("tr");
      fila.classList.add("carritoProducto");
  
      // Columna: Imagen y Nombre
      const columnaImagenNombre = document.createElement("td");
      columnaImagenNombre.style.textAlign = "center"; // Centra la imagen y el texto
  
      // Crear contenedor para imagen y título
      const contenedorImagenNombre = document.createElement("div");
      contenedorImagenNombre.style.display = "flex";
      contenedorImagenNombre.style.flexDirection = "column";
      contenedorImagenNombre.style.alignItems = "center";
  
      // Imagen del producto
      const imagenProducto = document.createElement("img");
      imagenProducto.src = producto.image; // Asegúrate de tener la URL de la imagen
      imagenProducto.alt = producto.title;
      imagenProducto.style.width = "50px"; // Puedes ajustar el tamaño
      imagenProducto.style.height = "50px"; // Puedes ajustar el tamaño
  
      // Nombre del producto
      const nombreProducto = document.createElement("span");
      nombreProducto.textContent = producto.title; // Usamos producto.title para el nombre
  
      // Agregar imagen y nombre al contenedor
      contenedorImagenNombre.appendChild(imagenProducto);
      contenedorImagenNombre.appendChild(nombreProducto);
  
      // Agregar el contenedor a la columna
      columnaImagenNombre.appendChild(contenedorImagenNombre);
      fila.appendChild(columnaImagenNombre);
  
      // Columna: Precio
      const columnaPrecio = document.createElement("td");
      columnaPrecio.textContent = `$${producto.price}`;
      fila.appendChild(columnaPrecio);
  
      // Columna: Cantidad
      const columnaCantidad = document.createElement("td");
      columnaCantidad.textContent = producto.quantity; // Asegúrate de tener la cantidad en cada producto
      fila.appendChild(columnaCantidad);
  
      // Columna: Subtotal
      const columnaSubtotal = document.createElement("td");
      const subtotal = producto.price * producto.quantity;
      columnaSubtotal.textContent = `$${subtotal}`;
      fila.appendChild(columnaSubtotal);
  
      // Agregar la fila a la tabla
      tablaCarrito.appendChild(fila);
    });
  };

document.addEventListener('DOMContentLoaded', renderizarCarrito);