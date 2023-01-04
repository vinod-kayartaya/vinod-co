const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Set up storage for the uploaded pictures
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    },
});

const upload = multer({ storage: storage });

// Set up the endpoint
app.post('/upload', upload.single('picture'), (req, res) => {
    // The picture is now uploaded and stored in the 'uploads' directory
    res.send('Picture uploaded successfully');
});

app.put('/api/posts', (req, resp) => {
    const filename = path.join(
        __dirname,
        '../..',
        'public',
        'posts',
        'meta.json'
    );

    fs.readFile(filename, 'utf-8')
        .then((content) => JSON.parse(content))
        .then((content) => {
            content = content.map((p) => {
                if (p.id === req.body.id) {
                    return req.body;
                }
                return p;
            });
            fs.writeFile(filename, JSON.stringify(content)).then(
                resp.json({ success: true })
            );
        })
        .catch((err) => resp.json({ success: false, error: err.message }));
});

app.post('/api/publish-to-git', (req, resp) => {
    const filename = path.join(__dirname, '../..', 'publish-to-git.sh');
    exec(`cat ${filename}`, (error, data, getter) => {
        if (error) {
            resp.end('error: ' + error.message);
            return;
        }
        if (getter) {
            resp.end('data: ' + data);
            return;
        }
        resp.end('data: ' + data);
    });
});

app.listen(4000, () => {
    console.log('server stqarted');
});
