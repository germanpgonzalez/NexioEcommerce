import { carrito } from "./script.js";

const menuCarrito = document.getElementById("menuCarrito");
const iconoCarrito = document.getElementById("id-carrito");

const tablaCarrito = document.querySelector(".tablaCarrito");

iconoCarrito.addEventListener("click", () => {
  menuCarrito.classList.toggle("show");
});



export const renderizarCarrito = () => {

    // Limpiar cualquier mensaje previo si el carrito tiene elementos
    const mensajeVacío = document.querySelector(".mensaje-vacio");
    if (mensajeVacío) {
        mensajeVacío.remove();
    }

    if (carrito.length === 0) {
        const mensajeVacío = document.createElement("p");
        mensajeVacío.textContent = "Carrito vacío";
        mensajeVacío.classList.add("mensaje-vacio");  
        tablaCarrito.appendChild(mensajeVacío);
        return;
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
