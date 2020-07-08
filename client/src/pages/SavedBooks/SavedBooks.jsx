import React, {useState, useEffect}from 'react';
import API from '../../utils/API';
import {Container, Image, Button  } from 'react-bootstrap';
import Card from '../../components/Card'



const SavedBooks = () =>{

    const [state, setState] = useState({
        books: []
        
    });

useEffect(() => {
    getBooks()
}, []);

function handleBookDelete(id)  {
    API.deleteBook(id)
        .then(response =>{ getBooks()})
}

async function getBooks(){
    await API.getBooks()
        .then(response => setState({ books: response.data}))
        .then(data => {console.log(data.data)})
        
        .catch(err => {
            console.log(err);
    });
}

return(
    <div>
        
        <Container className="">
                <h2>Saved Volumes</h2>
        </Container>
            {state.books.length ? (
            <Container className=" text-center">
                <h3>Current List</h3>
            {state.books.map(book =>(
                <Card  
                key={book.id} 
               
                
                title={book.title}
                subtitle={book.subtitle}
                imgSrc={book.image}
                authors={book.authors}
                description={book.description}
                
                
            
            />

            
            ))}    
             </Container>   
            ) : (
            <h2 className="text-center">{state.resultsMessage}</h2>
            )

            
            }
     </div>
    )

}

export default SavedBooks;