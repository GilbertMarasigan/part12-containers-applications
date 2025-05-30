const express = require('express');
const { getAsync } = require('../redis');
const router = express.Router();

router.get('/', async (req, res) => {
    const currentCount = Number(await getAsync('added_todos')) || 0;
    res.send({
        "added_todos": currentCount
    })
})

module.exports = router;