const axios = require('axios');
const db = require('../models');


module.exports ={
    
    searchGoogle: function(req, res) {
        const params = {
            q: req.params.book,
            key: ("AIzaSyDW6iVvwraX6G_ZfF-9SZl6cDufBIMWp5M")
          }
          console.log("https://www.googleapis.com/books/v1/volumes?",params)
          axios.get("https://www.googleapis.com/books/v1/volumes?", {params})
            .then(results => {
                res.json(results.data.items);
                
            })
            .catch(err => {
                res.send(err);
            })
    }

}