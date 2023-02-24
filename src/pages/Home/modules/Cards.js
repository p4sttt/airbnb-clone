import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Card from '../components/Card';

export default function Cards() {
  const apartments = [
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34444025/original/cae4b265-0ab6-4993-9eef-0274b187b116.jpeg?im_w=720',
      title: 'Rælingen, Норвегия',
      score: '4.96',
      referenc: 'Упоминается в Venuereport',
      bookingTime: '23–28 апр.',
      price: '33 696',
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34444025/original/cae4b265-0ab6-4993-9eef-0274b187b116.jpeg?im_w=720',
      title: 'Rælingen, Норвегия',
      score: '4.96',
      referenc: 'Упоминается в Venuereport',
      bookingTime: '23–28 апр.',
      price: '33 696',
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34444025/original/cae4b265-0ab6-4993-9eef-0274b187b116.jpeg?im_w=720',
      title: 'Rælingen, Норвегия',
      score: '4.96',
      referenc: 'Упоминается в Venuereport',
      bookingTime: '23–28 апр.',
      price: '33 696',
    },
  ];

  return (
    <Grid templateColumns={'repeat(3, 1fr)'} gap="4">
      {apartments.map(apartment => (
        <GridItem>
          <Card
            imgUrl={apartment.imgUrl}
            title={apartment.title}
            score={apartment.score}
            referenc={apartment.referenc}
            bookingTime={apartment.bookingTime}
            price={apartment.price}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
