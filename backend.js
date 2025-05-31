// index.js
const express = require('express');
const path = require('path');
const app = express();


// You can change the port or rely on an environment variable
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'templates')));
// Define a simple GET route at “/”
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'stolen.html'));
});

// Start listening on the specified port
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});



