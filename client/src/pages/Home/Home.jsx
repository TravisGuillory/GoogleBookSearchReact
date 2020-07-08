import React, { useState} from 'react';
import API from '../../utils/API';
import {Container, Button, Form, Row, Col, } from 'react-bootstrap';
import Card from '../../components/Card';
import { Link, Router} from 'react-router-dom';





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
    let book = state.books.find(book => book.id ===id);
    
    API.addBook({
        image: getImgSrc(book),
        googleId: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        
       
    })
        .then(()=> getBooks());
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
           let img = bookData.volumeInfo.imageLinks.thumbnail;
        if (img !== undefined) {
          return img;
        }
      } catch {
        return "";
      }
    }

    return(
        <div >
            
            <Container className="searchAPI-container ">
                
           
                <Row >
                    <Col className='justify-content-center'  >
                    <h3>Search for a Book Volume in Google Books</h3>
                    <Form inline className="p-2 " >
                        <Form.Group>
                            <Form.Label className="font-bold m-1">Enter Book Title</Form.Label>
                            <Form.Control type="input" name="query" id="query" onChange={handleInputChange} placeholder="Enter Book Search Term"></Form.Control>
                        </Form.Group>
                        <Button variant="success" onClick={handleFormSubmit} type="submit" className="m-2 p-2" tabIndex="0">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                
                <Col >
                    <h3>Review Saved Collection</h3><br/>
                    <Link to='/savedBooks'>
                        <Button variant="success" >Go</Button>
                    </Link>
                </Col>
                </Row>
            </Container>
            {state.books.length ? (
            <Container className="searchAPI-results col-8 align-items-center">
               
                      
                        <h3>Search Results</h3>
                        <Row >  
                        {state.books.map && state.books.map((book, i) =>(
                           <Col> 
                            <Card   
                                key={book.id} 
                                getImgSrc={getImgSrc} 
                                handleBookSave={()=> handleBookSave(book.id)}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                imgSrc={getImgSrc(book)}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                btnFunc={() => {handleBookSave(book.id)}}
                                btnText={"Save Volume"}
                                viewLink={book.volumeInfo.previewLink}
                                viewBtnText={"View Book"}
                            />
                           </Col> 
                        ))}
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