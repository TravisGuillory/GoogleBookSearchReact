import React from "react";
import { Card, Image, Button } from 'react-bootstrap';



function BookCard (props) {
    

  return (
    <>
     
         <Card  className='p-2 m-2' style={{ width: '20rem' }}>
            <Image className="image-fluid"variant="top" src={props.imgSrc}  />
            <Card.Body >
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle>{props.subtitle}</Card.Subtitle>
              <Card.Subtitle>{props.authors}</Card.Subtitle>
                <Card.Text>
                  {props.description}
                </Card.Text>
                <Button className="p-1"ariant={"primary"}onClick={props.btnFunc}>
                  {props.btnText}
                </Button>
                <Button  className="p-1 m-2" variant={"danger"} rel="noreferrer noopener" target="_blank" href={props.viewLink}>
                  {props.viewBtnText}
                </Button>
               </Card.Body>
               
         </Card>
       
    
    </>
  )
}
export default BookCard;