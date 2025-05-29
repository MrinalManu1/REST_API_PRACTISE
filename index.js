// index.js
const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];
app.get('/books', (req, res) => {
  res.json(books);
});
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);
  if (book) {
    book.title = title;
    book.author = author;
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index !== -1) {
    const deleted = books.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});
