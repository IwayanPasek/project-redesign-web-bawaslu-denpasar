const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rute dasar (Test)
app.get('/', (req, res) => {
  res.send('Server Backend Bawaslu Berjalan dengan Baik!');
});

// Jalankan Server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
