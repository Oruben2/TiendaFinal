document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtén el valor del input de búsqueda
    var searchTerm = document.getElementById('searchInput').value;
  
    // Realiza aquí la acción que desees con el término de búsqueda (por ejemplo, una búsqueda en una base de datos o mostrar resultados)
    // Por ahora, simplemente mostraremos el término de búsqueda en la consola
    console.log('Búsqueda realizada: ' + searchTerm);
  });
  