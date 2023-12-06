// Función para cargar y mostrar los productos
function mostrarProductos(data) {
  const cuerpoTabla = document.getElementById('res'); 

  // Iterar sobre los datos y agregar filas a la tabla
  data.forEach(item => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.precio}</td>
      <td>${item.descripcion_corta}</td>
      <td>${item.descripcion_larga}</td>
      <td>
        <a href='#' class='btn btn-danger' onclick='eliminarProducto()'>Eliminar</a><br><br>
        <a href='#' class='btn btn-success' onclick='editarProducto()'>Editar</a>
      </td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}

// Función para cargar y mostrar los usuarios
function mostrarUsuarios() {
  fetch('usuarios.json')
    .then(response => response.json())
    .then(data => {
      const cuerpoTabla = document.getElementById('cuerpoTabla');

      // Iterar sobre los datos y agregar filas a la tabla
      data.forEach(usuario => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${usuario.nombre}</td>
          <td>${usuario.correo}</td>
          <td>${usuario.contraseña}</td>
          <td>${usuario.ciudad}</td>
          <td>
          <a href='#' class='btn btn-danger' onclick='eliminarProducto()'>Eliminar</a><br><br>
          <a href='#' class='btn btn-success' onclick='editarProducto()'>Editar</a>
        </td>
        `;
        cuerpoTabla.appendChild(fila);
      });
    })
    .catch(error => {
      console.error('Error al cargar los usuarios:', error);
    });
}

function eliminarProducto(index) {
  // Aquí puedes eliminar el producto del array 'data' utilizando 'index'
  // Por ejemplo, si 'data' es un array, puedes usar 'splice' para eliminarlo
  data.splice(index, 1);
// Función para editar producto
function editarProducto(index) {
  // Aquí puedes realizar acciones para editar el producto en el array 'data' utilizando 'index'
  // Por ejemplo, abrir un formulario de edición con los datos del producto seleccionado

  // Luego, podrías guardar los cambios realizados y actualizar la tabla
  // renderizarTabla();
}

// Función para renderizar la tabla nuevamente con los datos actualizados
function renderizarTabla() {
  // Código para limpiar la tabla actual y volver a renderizarla con los datos actualizados
}

// Llamar a las funciones para mostrar los usuarios y los productos al cargar la página
mostrarUsuarios();

fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    mostrarProductos(data);
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });
