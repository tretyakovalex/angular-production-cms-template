const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

router.get('/get-json', async (req, res) => {
    try {
        const jsonData = await fs.readFile(path.join(__dirname, '..', 'data.json'), 'utf-8');
        const data = JSON.parse(jsonData);

        res.json(data);
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;