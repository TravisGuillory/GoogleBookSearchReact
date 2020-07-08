import axios from 'axios';

export default({
    // Save a book
    addBook: function(book){
        console.log(book)
        return axios.post('/api/books', book);
    },
     // Delete a specific book
    deleteBook: async function(id){
        console.log(id)
        return await axios.delete('/api/books/'+id);
    },
    // Get all saved books
    getBooks: function(){
        return axios.get('/api/books');
    },
    // Search a book title in Google Book API
    searchGoogleBooks: async function(book){
        
        return await axios.get(`api/google/${book}`);
    }

})