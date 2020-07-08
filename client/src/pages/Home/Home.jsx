import React, { useState} from 'react';
import API from '../../utils/API';
import {Container, Button, Form, Row, Col, Buitton} from 'react-bootstrap';
import Card from '../../components/Card';





function Home() {

const [state, setState] = useState({
    books: [],
    query: "",
    resultsMessage: ""
    
});

function handleInputChange(event){
    const { name, value} = event.target;
    setState({...state, [name]: value})
    
}

function handleBookSave(id){
    console.log(id)
    const book = state.books.find(book => book.id ===id);
    console.log(book)
    API.addBook({
        googleId: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail
    })
        .then(getBooks());
  };
    
async function getBooks(){
    await API.searchGoogleBooks(state.query)
    .then(response => {
        setState({...state, books: response.data});
    }).catch(() => 
        setState({
            books: [],
            query: "",
            resultsMessage: "No Volumes Found matcing your input"

        })
    )
}


function handleFormSubmit(event){
    event.preventDefault();
    if(state.query){
        getBooks();
    }
    
}


    // This function allows for mapping of the state object. 
    // Certain book searches ould result in an error in getting the 
    // the embedded thumbnailimg src. Namely Juurrasic Park.
    function getImgSrc(bookData) {
      try {
        if (bookData.volumeInfo.imageLinks.thumbnail !== undefined) {
          return bookData.volumeInfo.imageLinks.thumbnail;
        }
      } catch {
        return "";
      }
    }

    return(
        <div >
            
            <Container className="searchAPI-container ">
                
            <h3>Search for a Book Volume in Google Books</h3>
                <Row>
                    <Col className="col col-12 text-center">
                    <Form className="p-2 ">
                        
                            <Form.Group>
                                <Form.Label className="font-bold">Enter Book Title</Form.Label>
                                <Form.Control type="input" name="query" onChange={handleInputChange} placeholder="Enter Book Search Term"></Form.Control>
                            </Form.Group>
                        
                        <Button variant="outline-success" onClick={handleFormSubmit} type="submit" tabIndex="0">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
            {state.books.length ? (
            <Container className="searchAPI-results">
                <Row>
                    <Col>   
                        <h3>Search Results</h3>
                        {state.books.map(book =>(
                            <Card  
                                key={book.id} 
                                getImgSrc={getImgSrc} 
                                handleBookSave={()=> handleBookSave(book.id)}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                imgSrc={getImgSrc(book)}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                {...<Button onClick={()=> handleBookSave(book.id)}>
                                    Save Volume
                                </Button>}
                                
                            
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
            ) : (
            <h2 className="text-center">{state.resultsMessage}</h2>
            )
                
            
            }
          
        </div>
    )
}

export default Home;