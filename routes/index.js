const express = require('express');
const router = express.Router();

const Review = require('../models/Review');

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/menu', (req, res) => {
    res.render('menu');
});

router.get('/comments', async (req, res) => {
    const reviews = await Review.find().lean();
    res.render('comments', {
        reviews
    });
});

router.post('/comments', async (req, res) => {
    const review = new Review({
        name: req.body.name,
        txt: req.body.txt
    });
    try {
        console.log(req.body)
        const newReview = await review.save()
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;