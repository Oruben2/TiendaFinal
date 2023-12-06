document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnEnviarWishlist").addEventListener("click", function() {
      fetch('productos.json')
        .then(response => response.json())
        .then(data => {
          // Obtener el primer producto del JSON
          const primerProducto = data[0];
  
          // Redirigir a wishlist.html con los datos del producto como parámetros en la URL
          const urlParams = new URLSearchParams();
          urlParams.append('nombre', primerProducto.nombre);
          urlParams.append('descripcion', primerProducto.descripcion_corta);
          urlParams.append('precio', primerProducto.precio);
  
          window.location.href = `wishlist.html?${urlParams.toString()}`;
        })
        .catch(error => console.log('Error:', error));
    });
  });
  