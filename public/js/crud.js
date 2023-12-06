
function extraerDatos() {
    fetch('productos.json')
      .then(response => response.json())
      .then(data => {
        mostrarProductos(data);
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error);
      });
  
    console.log("correct");
  }
  
  // Llamar a la función directamente para extraer los datos al cargar la página
  extraerDatos();
  
  
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
                  
                  res.innerHTML += "<tr><td>"+item.nombre+"</td><td>"+item.precio+"</td><td>"+item.descripcion_corta+"</td><td>"+item.descripcion_larga+"</td><td> <a href='#' class='btn btn-danger' onclick=''>Eliminar</a><br><br></a> <a href='#' class='btn btn-success' onclick=''>Editar</a></td></tr>"
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
                  
                  res.innerHTML += "<tr><td>"+item.nombre+"</td><td>"+item.precio+"</td><td>"+item.descripcion_corta+"</td><td>"+item.descripcion_larga+"</td><td> <a href='#' class='btn btn-primary' onclick=''>Eliminar</a><br><br></a> <a href='#' class='btn btn-primary' onclick=''>Editar</a></td></tr>"
              
                if(item.id==9){
                  datos.splice(1, 1)
                }
              }      
          }
      }
  }

  ///CRUD USUARIOS
  function mostrarProductos(data) {
    // ... lógica para mostrar los productos
  }
  
  // Código para cargar los productos
  fetch('productos.json')
    .then(response => response.json())
    .then(data => {
      mostrarProductos(data);
    })
    .catch(error => {
      console.error('Error al cargar los productos:', error);
    });
  