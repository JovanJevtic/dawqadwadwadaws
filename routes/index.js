const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');


//? GET ALL Comments; / - GET
router.get('/', async (req, res) => {

  res.render('index', { comments: 'komentar' });

  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//? POST A COMMENT; / - POST
router.post('/', async (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    text: req.body.text
  });
  try {
    const newComment = await comment.save()
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//? DELETE SINGLE Comment; /:id - DELETE
router.delete('/:id', getComment, async (req, res) => {
  try {
    await res.comment.remove();
    res.json({ message: 'Sucessfully deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//? GET SINGLE Comment; /:id - GET
router.get('/:id', getComment, (req, res) => {
  res.json(res.comment);
});


//? FINDING Comment BY ID FUNCTION 
async function getComment(req, res, next) {
  let comment;
  try {
    comment = await Comment.findById(req.params.id)
    if (comment == null) {
      return res.status(404).json({ message: 'Sorry, this comment does not exist!' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.comment = comment;
  next();
}


module.exports = router;