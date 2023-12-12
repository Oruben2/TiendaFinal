// Función para mostrar el producto en la wishlist al cargar la página
function mostrarProductoEnWishlist() {
  // El primer producto de tu JSON
  fetch('productos.json')
  .then(response => response.json())
  .then(productos => {
    // Aquí puedes trabajar con la lista de productos obtenidos
    console.log(productos); // Por ejemplo, muestra los productos en la consola
    // También puedes manipularlos, mostrarlos en la página, etc.
  })
  .catch(error => console.error('Error al obtener los datos:', error));


  // Creamos un elemento para mostrar la información del producto en la wishlist
  const primerProducto = productos[0];

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
  
  console.log([productoHTML]);
  
  // Agregamos el producto al contenedor de la wishlist
  document.getElementById('wishlist').innerHTML = productoHTML;
    // Agregamos el producto al contenedor de la wishlist
    document.getElementById('carrito').innerHTML = productoHTML;
}

// Llamamos a la función para mostrar el producto en la wishlist al cargar la página
window.onload = mostrarProductoEnWishlist;

// Llamamos a la función para mostrar el producto en la wishlist al cargar la página
window.onload = mostrarProductoEnWishlist;

