class Producto {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  generarHTML() {
    return `
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${this.nombre}</h5>
            <p class="card-text">${this.descripcion}</p>
            <p class="card-text">Precio: $${this.precio}</p>
          </div>
        </div>
      </div>
    `;
  }
}

function mostrarProductoEnWishlist() {
  // El primer producto de tu JSON
  fetch('productos.json')
    .then(response => response.json())
    .then(productos => {
      const primerProducto = new Producto(
        productos[0].nombre,
        productos[0].descripcion_corta,
        productos[0].precio
      );
      const segundoProducto = new Producto(
        productos[1].nombre,
        productos[1].descripcion_corta,
        productos[1].precio
      );

      const productoHTML = primerProducto.generarHTML();
      
      // Agregamos el producto al contenedor de la wishlist
      document.getElementById('wishlist').innerHTML = productoHTML;

      // Manejador de clic para agregar el producto al carrito
      document.getElementById('wishlist').addEventListener('click', () => {
        // Aquí puedes ejecutar la lógica para agregar el producto al carrito
        const productoEnCarritoHTML = primerProducto.generarHTML();
        document.getElementById('carrito').innerHTML = productoEnCarritoHTML;
      });
    })
    .catch(error => console.error('Error al obtener los datos:', error));
}

// Llamamos a la función para mostrar el producto en la wishlist al cargar la página
window.onload = mostrarProductoEnWishlist;
