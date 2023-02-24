import React from 'react';
import { Container } from '@chakra-ui/react';
import Filters from './modules/Filters';
import Cards from './modules/Cards';

export default function Home() {
  return (
    <Container maxW="container.lg" mt="6">
      <Filters />
      <Cards />
    </Container>
  );
}
