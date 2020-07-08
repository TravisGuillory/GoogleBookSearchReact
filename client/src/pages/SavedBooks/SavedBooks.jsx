import React, {useState, useEffect}from 'react';
import API from '../../utils/API';
import {Container, Button } from 'react-bootstrap';
import Card from '../../components/Card'



const SavedBooks = () =>{

    const [state, setState] = useState({
        books: []
        
    });

useEffect(() => {
    getBooks()
}, []);

function handleBookDelete(id)  {
    console.log(id)
    API.deleteBook(id)
        .then(response => getBooks())
}

async function getBooks(){
    await API.getBooks()
        .then(response => setState({...state,  books: response.data}))
        .catch(err => {
            console.log(err);
    });
}

return(
    <div>
        
        <Container className="">
                <h2>Saved Volumes</h2>
                {console.log(state.books)}
        </Container>
            {state.books.length ? (
            <Container className=" text-center">
                <h3>Current List</h3>
            {state.books.map(book =>(
                <Card  
                    key={book._id} 
                
                    
                    title={book.title}
                    subtitle={book.subtitle}
                    imgSrc={book.image}
                    authors={book.authors}
                    description={book.description}
                    btnFunc={() => handleBookDelete(book._id)}
                    btnText={"Delete"}
                    viewLink={book.link}
                    viewBtnText={"View Book"}
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