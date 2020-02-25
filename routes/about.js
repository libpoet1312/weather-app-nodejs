var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
});

module.exports = router;
