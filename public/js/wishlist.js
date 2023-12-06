// Función para agregar productos a la Wishlist
function agregarProducto(nombreProducto) {
    // Obtener la lista de deseos
    const wishlist = document.getElementById('wishlist');
  
    // Crear un nuevo elemento de lista
    const nuevoProducto = document.createElement('li');
    nuevoProducto.className = 'list-group-item';
    nuevoProducto.innerText = nombreProducto;
  
    // Agregar el producto a la lista de deseos
    wishlist.appendChild(nuevoProducto);
  }
  