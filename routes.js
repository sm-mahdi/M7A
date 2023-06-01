const express = require('express');
const router = express.Router();
const Book = require('./book');

// GET /books: Retrieve all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /books/:id: Retrieve a specific book by ID
router.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /books: Create a new book
router.post('/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /books/:id: Update a book by ID
router.put('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /books/:id: Delete a book by ID
router.delete('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) {
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

