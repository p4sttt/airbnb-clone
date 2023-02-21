import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Stack,
  Center,
} from '@chakra-ui/react';
import FilterIcon from '../assets/FilterIcon';
import LeftArrow from '../assets/LeftArrow';
import RightArrow from '../assets/RightArrow';

export default function Home() {
  const filters = [
    {
      icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
      text: 'Супербассейны',
    },
    {
      icon: '	https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      text: 'Отличные виды',
    },
    {
      icon: '	https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      text: 'Тропики',
    },
    {
      icon: 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
      text: 'Арктика',
    },
    {
      icon: 'https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg',
      text: 'Рядом озеро',
    },
    {
      icon: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
      text: 'Отдельные комнаты',
    },
    {
      icon: '	https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
      text: 'Luxe',
    },
    {
      icon: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      text: 'У пляжа',
    },
    {
      icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
      text: 'Вау',
    },
    {
      icon: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
      text: 'Загородные дома',
    },
    {
      icon: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
      text: 'Дизайн',
    },
    {
      icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
      text: 'Замки',
    },
    {
      icon: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
      text: 'Микродома',
    },
  ];

  const ref = React.useRef();

  const scroll = offset => {
    ref.current.scrollLeft += offset;
  };

  return (
    <Container maxW="container.lg" mt="6">
      <Flex flexDirection="row" alignItems="center" gap="4">
        <Button
          rounded="full"
          variant="outline"
          boxSize="10"
          _hover="none"
          onClick={() => scroll(-300)}
        >
          <LeftArrow boxSize="4" />
        </Button>
        <Flex
          as="fliters"
          flexDirection="row"
          alignItems="center"
          gap="8"
          overflowX="scroll"
          scrollBehavior="smooth"
          width="max-content"
          ref={ref}
        >
          {filters.map(filter => (
            <Box
              flexDirection="column"
              opacity={0.7}
              _hover={{
                opacity: '1',
                borderBottom: '2px',
                borderColor: 'gray.300',
              }}
              py="4"
            >
              <Center>
                <Image src={filter.icon} boxSize="6" />
              </Center>
              <Text fontSize="xs" fontWeight="semibold" w="max-content" mt="2">
                {filter.text}
              </Text>
            </Box>
          ))}
        </Flex>
        <Button
          rounded="full"
          variant="outline"
          boxSize="10"
          scrollBehavior="smooth"
          _hover="none"
          onClick={() => scroll(300)}
        >
          <RightArrow boxSize="4" />
        </Button>
        <Button
          gap="2"
          variant="outline"
          border="1px"
          borderColor="gray.300"
          rounded="xl"
          w="fit-content"
          paddingX="6"
          _hover="none"
        >
          <FilterIcon boxSize={4} />
          <Text fontSize="xs" fontWeight="semibold" w="max">
            Фильтры
          </Text>
        </Button>
      </Flex>
    </Container>
  );
}
