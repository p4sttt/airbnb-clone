import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import './index.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
