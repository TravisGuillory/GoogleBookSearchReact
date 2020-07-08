import React, {useState, useEffect}from 'react';
import API from '../../utils/API';
import {Container, Button, Row, Col, Form } from 'react-bootstrap';
import Card from '../../components/Card'
import { Link } from 'react-router-dom';



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
            <Row>    
                <Col className="text-left ">
                    <h2 className="text-left ml-5 p-3">Saved Volumes</h2>
                </Col>
                <Col >
                    <Form  inline>
                        <Form.Group>
                        <h5 >Return to Seach Page </h5>
                        <Link to='/'>
                            <Button variant="success" className="mx-3"> Go</Button>
                        </Link>
                        </Form.Group>
                    </Form>
                </Col>              
            </Row>
        </Container>  
            {state.books.length ? (
            <Container className=" text-center">
                    
                <Row>
                    {state.books.map(book =>(
                
                <Col>
                    
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

export default SavedBooks;