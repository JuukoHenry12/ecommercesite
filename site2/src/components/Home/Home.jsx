import React from 'react'
import products from '../../product'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Product from '../Product'
const Home = () => {
  return (
    <Container>
      <h3>Listest Products</h3>
      <Row>
        {
          products.map((product) => (
            <Col sm={12} md={6} lg={4} spacing={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default Home