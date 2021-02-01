import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap/'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
