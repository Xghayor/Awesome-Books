let books = JSON.parse(localStorage.getItem('books')) || [];

const addBtn = document.getElementById('formBtn');
const awesomeBooks = document.getElementById('book');

// Add books function

function add() {
  const title = document.getElementById('fTitle').value;
  const author = document.getElementById('fAuthor').value;

  if (title.trim() === '' || author.trim() === '') {
    alert('Please enter title and author');
    return;
  }

  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));

  updateBooks();
}

addBtn.addEventListener('click', add);

function updateBooks() {
  awesomeBooks.innerHTML = '';

  books.forEach(book => {
    awesomeBooks.innerHTML += `
      <div>
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <button type="button" class="remove-button" value="${book.title}">Remove</button>
      </div>
      <hr>
    `;
  });
}

// Remove books function
function removeBook(bookTitle) {
books = books.filter(book => book.title !== bookTitle);
  localStorage.setItem('books', JSON.stringify(books));
  updateBooks();
}
