// Función para mostrar el producto en la wishlist al cargar la página
function mostrarProductoEnWishlist() {
  // El primer producto de tu JSON
  const primerProducto = {
    "nombre": "Enfriador de CPU con RGB",
    "precio": 1569,
    "descripcion_corta": "Marca: COOLER MASTER Producto de alta calidad RGB"
  };

  // Creamos un elemento para mostrar la información del producto en la wishlist
  const productoHTML = `
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${primerProducto.nombre}</h5>
          <p class="card-text">${primerProducto.descripcion_corta}</p>
          <p class="card-text">Precio: $${primerProducto.precio}</p>
        </div>
      </div>
    </div>
  `;

  // Agregamos el producto al contenedor de la wishlist
  document.getElementById('wishlist').innerHTML = productoHTML;
}

// Llamamos a la función para mostrar el producto en la wishlist al cargar la página
window.onload = mostrarProductoEnWishlist;
