function fetchBooks() {
  // Fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      // Calling the renderBooks() function and passing the JSON-ified data as argument
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
