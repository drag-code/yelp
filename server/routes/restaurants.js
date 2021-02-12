const router = require('express').Router();

router.get('/restaurant', (req, res) => {
    return res.json({perra: "hola"});
});

router.get('/restaurant/:id', (req, res) => {
    console.log(req);
});

router.delete('/restaurant/:id', (req, res) => {
    return res.json({perra: "eliminada"});
});

router.patch('/restaurant/:id', (req, res) => {
    const body = req.body;
});

router.post('/restaurant', (req, res) => {
    const body = req.body;
    console.log(body);
});

module.exports = router;
