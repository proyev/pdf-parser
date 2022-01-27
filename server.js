const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.post('/upload', (req, res, next) => {
    console.log(req);
});

app.listen(port=8000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});