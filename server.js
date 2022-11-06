const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.info("Servidor rodando em http://localhost:${port}");
});

