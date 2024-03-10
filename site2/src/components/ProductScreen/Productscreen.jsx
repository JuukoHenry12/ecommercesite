import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Container } from 'react-bootstrap';
import Rating from '../Rating';
import products from '../../product';

const Productscreen = () => {
  const { id } = useParams();
  const product = products.find(p => Number(p._id) === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <Link to='/' className='btn btn-primary my-3'>GO back</Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name}
            width="400" height="400"
          />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} ratings`} color={'#f8e825'} />
            </ListGroup.Item>

            <ListGroup.Item>
              <p>Description{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h6>Price:</h6>

                </Col>
                <Col>
                  <h4>UGX {product.price}</h4>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                  <Col>
                    <h3>Status</h3>
                  </Col>
                  <Col>{product.countInStock > 0 ? 'In stock' : 'Out of stock'}</Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type="button" className='btn btn-dark' disabled={product.countInStock == 0}>Add to Cart</Button>
            </ListGroup.Item>
           
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Productscreen;
