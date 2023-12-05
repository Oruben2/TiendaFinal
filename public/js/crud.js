const contenedorProductos = document.getElementById('productos');

// Función para mostrar los productos en el HTML
function mostrarProductos(productos) {
  contenedorProductos.innerHTML = ''; // Limpiar el contenedor

  productos.forEach(producto => {
    // Crear elementos HTML para cada producto
    const productoDiv = document.createElement('div');
    productoDiv.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>Precio: $${producto.precio}</p>
      <p>${producto.descripcion_corta}</p>
      <p>${producto.descripcion_larga}</p>
      <button onclick="editarProducto('${producto.nombre}')">Editar</button>
      <button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
    `;

    // Agregar el producto al contenedor
    contenedorProductos.appendChild(productoDiv);
  });
}

// Función para editar un producto (puedes implementarla según tu necesidad)
function editarProducto(nombre) {
  // Lógica para editar un producto
  console.log(`Editar ${nombre}`);
}

// Función para eliminar un producto (puedes implementarla según tu necesidad)
function eliminarProducto(nombre) {
  // Lógica para eliminar un producto
  console.log(`Eliminar ${nombre}`);
}

// Cargar los productos desde el archivo JSON
fetch('productos.json')
  .then(response => response.json())
  .then(data => {
  
    mostrarProductos(data);
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });


  console.log("correct");

  document.querySelector('#btnExtraer').addEventListener('click', traerDatos());
  
  
  function traerDatos() {
      console.log("correct");
  
      const xhttp = new XMLHttpRequest();
  
      xhttp.open('GET', 'productos.json', true);
  
      xhttp.send();
  
      xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);
              let datos = JSON.parse(this.responseText);
              console.log(datos)
           
              let res = document.querySelector('#res');
              res.innerHTML = '';
  
  
              for (let item of datos) {
                  //console.log(item.precio);
                  
                  res.innerHTML += "<tr><td>"+item.id+"</td><td>"+item.nombre+"</td><td>"+item.cantidad+"</td><td>"+item.descripción+"</td><td>"+item.precio+"</td><td><img src='"+item.imagen+"'></img></td><td>  <a href='#' class='btn btn-primary' onclick=''>Eliminar</a><br><br> <a href='Modificar.html' class='btn btn-primary' onclick=''>Modificar</a></td></tr>"
   
              }
   
          }
      }
  }  

  console.log("correct");

  document.querySelector('#eliminar').addEventListener('click', traer);
  
  
  function traer() {
      console.log("correct");
  
      const xhttp = new XMLHttpRequest();
  
      xhttp.open('GET', 'productos.json', true);
  
      xhttp.send();
  
      xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);
              let datos = JSON.parse(this.responseText);
              console.log(datos)
           
              let res = document.querySelector('#res');
              res.innerHTML = '';
  
  
              for (let item of datos) {
                  //console.log(item.precio);
                  
                  res.innerHTML += "<tr><td>"+item.id+"</td><td>"+item.nombre+"</td><td>"+item.cantidad+"</td><td>"+item.descripción+"</td><td>"+item.precio+"</td><td><img src='"+item.imagen+"'></img></td><td>  <a href='#' class='btn btn-primary' onclick=''>Eliminar</a></td></tr>"
             
                if(item.id==9){
                  datos.splice(1, 1)
                }
              }      
          }
      }
  }
  