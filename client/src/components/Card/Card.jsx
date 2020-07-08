import React from "react";
import { Card, Image, Button } from 'react-bootstrap';



function BookCard (props) {
    

  return (
    <>
     
         <Card  className='p-2 m-2' style={{ width: '20rem' }}>
            <Image variant="top" src={props.imgSrc}  />
            <Card.Body >
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle>{props.subtitle}</Card.Subtitle>
              <Card.Subtitle>{props.authors}</Card.Subtitle>
                <Card.Text>
                  {props.description}
                </Card.Text>
               </Card.Body>
               
         </Card>
       
    
    </>
  )
}
export default BookCard;