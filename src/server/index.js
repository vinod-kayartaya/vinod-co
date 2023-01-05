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

const slugify = (string) => {
    return string
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
};

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

app.put('/api/posts/:source', (req, resp) => {
    // first update the meta and then update the content of the post.
    let filename = path.join(
        __dirname,
        '../..',
        'public',
        'posts',
        'meta.json'
    );

    const { meta, selectedPost } = req.body;

    fs.readFile(filename, 'utf-8')
        .then((content) => JSON.parse(content))
        .then((content) => {
            content = content.map((p) => {
                if (p.id === meta.id) {
                    return meta;
                }
                return p;
            });
            // fs.writeFile(filename, JSON.stringify(content)).then(() => {
            //     console.log(content);
            //     resp.json({ success: true });
            // });

            return fs.writeFile(filename, JSON.stringify(content));
        })
        .then(() => {
            const { source } = req.params;

            filename = path.join(
                __dirname,
                '../..',
                'public',
                'posts',
                source + '.md'
            );
            fs.writeFile(filename, selectedPost)
                .then(() => resp.end())
                .catch((err) => {
                    console.log(err);
                    resp.end();
                });
        })
        .catch((err) => {
            console.log(err);
            resp.json({ success: false, error: err.message });
        });
});
app.post('/api/posts', (req, resp) => {
    // first update the meta and then update the content of the post.
    let filename = path.join(
        __dirname,
        '../..',
        'public',
        'posts',
        'meta.json'
    );

    const { meta, selectedPost } = req.body;
    meta.source = slugify(meta.title);

    const date = new Date();
    meta.created = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    meta.tags = [];

    fs.readFile(filename, 'utf-8')
        .then((content) => JSON.parse(content))
        .then((content) => {
            if (!content || content.length === 0) {
                meta.id = 1;
            } else {
                meta.id = Math.max(...content.map((c) => c.id)) + 1;
            }
            content.push(meta);
            return fs.writeFile(filename, JSON.stringify(content));
        })
        .then(() => {
            filename = path.join(
                __dirname,
                '../..',
                'public',
                'posts',
                meta.source + '.md'
            );
            fs.writeFile(filename, selectedPost)
                .then(() => resp.end())
                .catch((err) => {
                    console.log(err);
                    resp.end();
                });
        })
        .catch((err) => {
            console.log(err);
            resp.json({ success: false, error: err.message });
        });
});

app.post('/api/publish-to-git', (req, resp) => {
    const filename = path.join(__dirname, '../..', 'publish-to-git.sh');
    const { commitMessage } = req.body;
    exec(`sh ${filename} "${commitMessage}"`, (error, data, getter) => {
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
    console.log('server started');
});
