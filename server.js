const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
