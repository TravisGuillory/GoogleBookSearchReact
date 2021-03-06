const router = require('express').Router()
const googleController = require('../../controllers/googleController');


// Matches with 'api/google'
router.route('/:book')
    .get(googleController.searchGoogle);


module.exports = router; 
