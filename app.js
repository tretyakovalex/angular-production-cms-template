const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;


// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// === Routes ===
app.use(require('./routes/json-routes.js'));
// ==============

// === Frontend: ===
app.use(express.static(path.join(__dirname, 'public')));
app.get('*angular', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
// =================

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});