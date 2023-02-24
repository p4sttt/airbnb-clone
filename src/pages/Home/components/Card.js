import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import StarIcon from '../../../assets/StarIcon';

export default function Card({
  imgUrl,
  title,
  score,
  referenc,
  bookingTime,
  price,
}) {
  // const imgUrl =
  //   'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34444025/original/cae4b265-0ab6-4993-9eef-0274b187b116.jpeg?im_w=720';
  // const title = 'Rælingen, Норвегия';
  // const score = 4.96;
  // const referenc = 'Упоминается в Venuereport';
  // const bookingTime = '23–28 апр.';
  // const price = '33 696';

  return (
    <Flex flexDirection="column">
      <Image src={imgUrl} borderRadius={16} />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt="2"
      >
        <Text fontWeight="semibold" fontSize="lg" color="gray.900">
          {title}
        </Text>
        <Flex flexDirection="row" alignItems="center" gap="1">
          <StarIcon />
          <Text color="gray.700">{score}</Text>
        </Flex>
      </Flex>
      <Text color="gray.600">{referenc}</Text>
      <Text color="gray.600">{bookingTime}</Text>
      <Flex flexDirection="row">
        <Text fontWeight="semibold">{price}₽⠀</Text>
        <Text> за ночь</Text>
      </Flex>
    </Flex>
  );
}
