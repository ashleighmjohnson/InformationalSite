const express = require('express');
const path = require('path'); 
const app = express();
const port = 8080; 

// css + pictures
app.use(express.static(path.join(__dirname, 'public')));

// gets request, serves it
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});


app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
  });

// Start server
app.listen(port, () => {
  console.log(`node server running`);
});