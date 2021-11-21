const express = require('express');
const router = express.Router();
const fs = require('fs')

function readFileImg(dirFiles) {
    return new Promise((res, rej) => {
        fs.readdir(dirFiles, 'utf8', (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })
}

readFileImg('./public/img/protein').then(data => {
    console.log(data)
    router.get('/', (req, res) => {
        res.json(data)
    })
}).catch(err => console.log(err, 'имя папки указано неверно'))

module.exports = router;
