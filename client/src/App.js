import { Container } from 'react-bootstrap'
import Header  from './components/layouts/Header';
import Footer  from './components/layouts/Footer';
import HomeScreen from './screens/HomeScreen';


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
