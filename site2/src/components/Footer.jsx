import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
        <Container>
          <Row>
             <Col>
                <h3 className='text-center py-3'>Copyright &copy;electric Shop</h3>
             </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer