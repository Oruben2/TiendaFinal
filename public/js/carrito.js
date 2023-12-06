// Carga de productos desde el archivo JSON
fetch('productos.json')
.then(response => response.json())
.then(productos => {
  const productosDiv = document.getElementById('productos');
  productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <p>${producto.descripcion_corta}</p>
      <button onclick="agregarAlCarrito(${JSON.stringify(producto)})">Enviar al carrito de compras</button>
    `;
    productosDiv.appendChild(productoDiv);
  });
});

// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
const listaCarrito = document.getElementById('lista-carrito');
const nuevoItem = document.createElement('li');
nuevoItem.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
listaCarrito.appendChild(nuevoItem);
}