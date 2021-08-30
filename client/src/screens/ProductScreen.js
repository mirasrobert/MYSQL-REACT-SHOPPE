import { Link } from 'react-router-dom';
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
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p.id === match.params.id);

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
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
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
                          disabled={product.countInStock === 0}
                        />
                        <Button
                          variant='primary'
                          size='sm'
                          disabled={product.countInStock === 0}>
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
