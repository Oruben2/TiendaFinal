
// Obtener todos los precios y sus contenedores
const precios = document.querySelectorAll('.card-body h4.card-text');
const productos = document.querySelectorAll('.col');

// Crear un array con los precios y sus respectivos elementos
let preciosProductos = [];
precios.forEach((precio, index) => {
  preciosProductos.push({
    precio: parseFloat(precio.textContent.replace('$', '').replace(',', '')),
    elemento: productos[index],
  });
});

// Función para ordenar de menor a mayor
const ordenarMenorAMayor = () => {
  preciosProductos.sort((a, b) => a.precio - b.precio);
  actualizarOrden();
};

// Función para ordenar de mayor a menor
const ordenarMayorAMenor = () => {
  preciosProductos.sort((a, b) => b.precio - a.precio);
  actualizarOrden();
};

// Función para actualizar el orden de los productos en el DOM
const actualizarOrden = () => {
  const contenedorProductos = document.querySelector('.row');
  contenedorProductos.innerHTML = '';

  preciosProductos.forEach(item => {
    contenedorProductos.appendChild(item.elemento);
  });
};

// Evento al cambiar el selector
document.getElementById('selectorOrden').addEventListener('change', function() {
  if (this.value === 'ascendente') {
    ordenarMenorAMayor();
  } else if (this.value === 'descendente') {
    ordenarMayorAMenor();
  }
});

//Ordenas por letras

// Declarar titlesArray en el ámbito global o donde sea accesible
let titlesArray;

// Obtener todos los elementos con la clase 'card-title' y asignar a titlesArray
window.onload = function() {
  const productTitles = document.querySelectorAll('.card-title');
  titlesArray = Array.from(productTitles);
}
// Función para ordenar alfabéticamente A-Z y mostrar los productos de 3 en 3
function sortAZ() {
  titlesArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
  
  // Limpiar el contenedor antes de agregar los elementos ordenados
  const section = document.getElementById('section');
  section.innerHTML = '';
  
  // Agrupar los productos en conjuntos de tres elementos
  for (let i = 0; i < titlesArray.length; i += 3) {
    const productsGroup = titlesArray.slice(i, i + 3);
    
    // Crear un div para contener los productos del grupo
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    
    // Agregar cada producto del grupo al div del grupo
    productsGroup.forEach(title => {
      const parentCard = title.closest('.col');
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-4');
      colDiv.appendChild(parentCard.cloneNode(true));
      rowDiv.appendChild(colDiv);
    });
    
    // Agregar el div del grupo al contenedor
    section.appendChild(rowDiv);
  }
}

// Función para ordenar alfabéticamente Z-A y mostrar los productos de 3 en 3
function sortZA() {
  titlesArray.sort((a, b) => b.textContent.localeCompare(a.textContent));

  // Limpiar el contenedor antes de agregar los elementos ordenados
  const section = document.getElementById('section');
  section.innerHTML = '';
  
  // Agrupar los productos en conjuntos de tres elementos
  for (let i = 0; i < titlesArray.length; i += 3) {
    const productsGroup = titlesArray.slice(i, i + 3);
    
    // Crear un div para contener los productos del grupo
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    
    // Agregar cada producto del grupo al div del grupo
    productsGroup.forEach(title => {
      const parentCard = title.closest('.col');
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-4');
      colDiv.appendChild(parentCard.cloneNode(true));
      rowDiv.appendChild(colDiv);
    });
    
    // Agregar el div del grupo al contenedor
    section.appendChild(rowDiv);
  }
}


document.getElementById('ordenAZ').addEventListener('click', sortAZ);
document.getElementById('ordenZA').addEventListener('click', sortZA);



