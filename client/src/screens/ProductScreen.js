import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import Rating from '../components/products/Rating';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data.product);
    };

    fetchProducts();
  }, [match]);

  return (
    <>
      <Link className='btn btn-secondary my-3' to='/'>
        {' '}
        Go Back
      </Link>
      <Row>
        <Col md='6'>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md='6'>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              {product.rating && (
                <Rating
                  value={product.rating}
                  text={`${product.reviews_count} reviews`}
                />
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <strong>${product.price}</strong>{' '}
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            <ListGroup.Item>
              <p>
                {product.countInStock > 0
                  ? `${product.countInStock} left on stock`
                  : 'Out Of Stock'}
              </p>
              <Row>
                <Col>
                  <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formPlaintextPassword'>
                    <Form.Label column sm='2'>
                      Quantity:
                    </Form.Label>
                    <Col md='5' sm='3'>
                      <InputGroup>
                        <FormControl
                          type='number'
                          placeholder='1'
                          disabled={product.count_in_stock === 0}
                        />
                        <Button
                          variant='primary'
                          size='sm'
                          disabled={product.count_in_stock === 0}>
                          Add To Cart
                        </Button>
                      </InputGroup>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
