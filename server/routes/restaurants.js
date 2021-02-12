const router = require('express').Router();

router.get('/restaurant', (req, res) => {
    return res.status(200).json({perra: "success"});
});

router.get('/restaurant/:id', (req, res) => {
    return res.status(200).json({perra: "success"});
});

router.delete('/restaurant/:id', (req, res) => {
    return res.status(204).json({perra: "erased"});
});

router.patch('/restaurant/:id', (req, res) => {
    return res.status(200).json({perra: "updated"});
});

router.post('/restaurant', (req, res) => {
    return res.status(201).json({perra: "created"});
});

module.exports = router;
