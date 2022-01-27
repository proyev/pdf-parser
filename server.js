const express = require('express');
const fileUpload = require('express-fileupload');
const parsePDF = require('pdf-parse');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.post('/upload', (req, res) => {
    try {
        parsePDF(req.files.pdf)
            .then(result => {
                res.statusCode = 200;
                res.send(result);
            })
            .catch(err => {
                res.statusCode = 500;
                res.send(err);
            })
    } catch (err) {
        res.statusCode = 500;
        res.send();
    }
});

app.use((req, res) => {
    res.statusCode = 400;
    res.redirect('/');
    res.send();
});

app.listen(port=8000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});