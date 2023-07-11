# Book Collection

This is a simple web application that allows you to keep track of a collection of books. You can add books to the collection, remove books from the collection, and view all the books in the collection.

## Getting Started

To run the application, simply open the `index.html` file in a web browser.

## Functionality

The application provides the following functionality:

- **Add a Book:** You can add a new book to the collection by entering the title and author in the provided input fields and clicking the "Add" button. The new book will be added to the collection and displayed on the page.

- **Remove a Book:** You can remove a book from the collection by clicking the "Remove" button next to the book you want to remove. The book will be removed from the collection and will disappear from the page.

- **Display Books:** The application displays all the books saved in the collection in the top part of the page. You can easily see the title and author of each book.

## Data Persistence

The application uses the `localStorage` feature of the browser to preserve the book collection even if you refresh the page or close the browser. The collection will be loaded from `localStorage` when you open the application, and any changes you make to the collection will be saved in `localStorage`.

## Development

If you want to make modifications or enhance the application, here's a brief overview of the code structure:

- The book collection is stored as an array of objects in the JavaScript file (`script.js`).

- The `addBook()` function adds a new book to the collection.

- The `removeBook()` function removes a book from the collection.

- The `updatebooks()` function displays all the books in the collection on the page.

Feel free to explore the code and make any changes you like.

## License

This project is licensed under the [MIT License](LICENSE).
