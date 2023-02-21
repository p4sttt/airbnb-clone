import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserLogo from '../assets/UserLogo';
import MenuIcon from '../assets/MenuIcon';

export default function Header() {
  const airbnbLogoPath =
    'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg';

  return (
    <Box as="header">
      <Container maxW="container.lg" paddingY="4">
        <Flex flex="row" justifyContent="space-between" alignItems="center">
          <Link to={'/'}>
            <Image src={airbnbLogoPath} h={'8'} />
          </Link>
          <Flex flex="row" gap="6" alignItems="center">
            <Button
              rounded="full"
              variant="ghost"
              _hover={{ bgColor: 'gray.50' }}
            >
              Сдать жилье на Airbnb
            </Button>
            <Box
              py={'2'}
              px="2"
              rounded="full"
              pl={4}
              borderColor="gray.300"
              borderWidth={1}
              _hover={{
                shadow: 'md',
                transitionTimingFunction: 'ease-in-out',
                transitionDuration: '0.2s',
              }}
            >
              <HStack gap={1}>
                <MenuIcon boxSize={6} />
                <UserLogo boxSize={8} />
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </Container>
      <Divider />
    </Box>
  );
}
