const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON

// GET /movies
app.get('/movies', (req, res) => {
  res.json([{ id: 1, title: 'Inception', genre: 'Sci-Fi' }]);
});

// POST /movies
app.post('/movies', (req, res) => {
  const newMovie = req.body;
  res.status(201).json({ message: 'Movie added!', movie: newMovie });
});

// GET /movies/:id
app.get('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  res.json({ id: movieId, title: 'Inception', genre: 'Sci-Fi' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
