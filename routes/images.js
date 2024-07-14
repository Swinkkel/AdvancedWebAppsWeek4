const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.array('images'), (req, res) => {
    res.send('Hi');
});

module.exports = router;
