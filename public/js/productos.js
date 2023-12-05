
  // Obtener todos los elementos de tarjeta
  const cards = document.querySelectorAll('.card');

  // Función para ordenar de A-Z
  function sortAZ() {
    const sortedCards = Array.from(cards).sort((a, b) => {
      const titleA = a.querySelector('.card-title').innerText.toLowerCase();
      const titleB = b.querySelector('.card-title').innerText.toLowerCase();
      return titleA.localeCompare(titleB);
    });
    displaySortedCards(sortedCards);
  }

  // Función para ordenar de Z-A
  function sortZA() {
    const sortedCards = Array.from(cards).sort((a, b) => {
      const titleA = a.querySelector('.card-title').innerText.toLowerCase();
      const titleB = b.querySelector('.card-title').innerText.toLowerCase();
      return titleB.localeCompare(titleA);
    });
    displaySortedCards(sortedCards);
  }

  // Función para mostrar las tarjetas ordenadas
  function displaySortedCards(sortedCards) {
    const forEachSearch = document.getElementById('forEachsearch');
    forEachSearch.innerHTML = '';
    sortedCards.forEach(card => {
      forEachSearch.appendChild(card);
    });
  }

  // Asignar eventos a los botones A-Z y Z-A
  document.querySelector('a[href="#"]').addEventListener('click', sortAZ);
  document.querySelector('a[href="#"]').addEventListener('click', sortZA);
