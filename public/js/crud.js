// Función para cargar y mostrar los productos
function mostrarProductos(data) {
  const cuerpoTabla = document.getElementById('res');

  // Iterar sobre los datos y agregar filas a la tabla
  data.forEach(producto => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>${producto.descripcion_corta}</td>
      <td>${producto.descripcion_larga}</td>
      <td>
        <a href='#' class='btn btn-danger btn-eliminar' onclick='eliminarProducto()'>Eliminar</a><br><br>
        <a href='#' class='btn btn-success' onclick='editarProducto()'>Editar</a>
      </td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}

// Función para cargar y mostrar los usuarios
function mostrarUsuarios(data) {
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
        <a href='#' class='btn btn-danger btn-eliminar' onclick='eliminarUsuario()'>Eliminar</a><br><br>
        <a href='#' class='btn btn-success' onclick='editarUsuario()'>Editar</a>
      </td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}

// Función para eliminar producto
function eliminarProducto() {
  // Lógica para eliminar producto
}

// Función para editar producto
function editarProducto() {
  // Lógica para editar producto
}

// Función para eliminar usuario
function eliminarUsuario() {
  // Lógica para eliminar usuario
}

// Función para editar usuario
function editarUsuario() {
  // Lógica para editar usuario
}

// Llamar a las funciones para mostrar los usuarios y los productos al cargar la página
fetch('usuarios.json')
  .then(response => response.json())
  .then(data => {
    mostrarUsuarios(data);
  })
  .catch(error => {
    console.error('Error al cargar los usuarios:', error);
  });

fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    mostrarProductos(data);
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });

// Inicializar la tabla
function actualizarTabla() {
  // Lógica para actualizar la tabla después de eliminar un producto o usuario
}
