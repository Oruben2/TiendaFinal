document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnEnviarWishlist").addEventListener("click", function() {
      fetch('productos.json')
        .then(response => response.json())
        .then(data => {
          // Obtener el primer producto del JSON
          const primerProducto = data[0];
  
          // Crear una nueva ventana o pestaña para mostrar la información del producto
          const nuevaVentana = window.open('', '_blank');
          nuevaVentana.document.write(`
            <html>
              <head>
                <title>Producto en Wishlist</title>
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
              </head>
              <body>
                <div class="container mt-5">
                  <h2>${primerProducto.nombre}</h2>
                  <p><strong>Descripción:</strong> ${primerProducto.descripcion}</p>
                  <p><strong>Precio:</strong> $${primerProducto.precio}</p>
                </div>
              </body>
            </html>
          `);
        })
        .catch(error => console.log('Error:', error));
    });
  });
  