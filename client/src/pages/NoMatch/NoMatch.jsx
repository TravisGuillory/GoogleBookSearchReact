import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';


function NoMatch(){


    return(
        <Container>
            <Row>
                <Col>
                    <h1>Book Volume Not Found</h1>
                    <Image src={require('./sad-face.jpg')}/>
                </Col>
            </Row>

        </Container>
    );


    

}
export default NoMatch;