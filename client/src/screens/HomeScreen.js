import { useState, useEffect } from 'react';
import Product from '../components/products/Product';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.length > 0 &&
          products.map((product) => (
            <Col key={product.id} sm='12' md='6' lg='4' xl='3'>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
