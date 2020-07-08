const path = require('path');
const router = require('express').Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

// Matches with '/api/books'
router.use('/books', bookRoutes);
router.use('/google', googleRoutes);

// Matches with '/api/google/'
// Todo

module.exports = router;


