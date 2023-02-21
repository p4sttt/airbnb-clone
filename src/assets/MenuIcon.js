import React from 'react';
import { Icon } from '@chakra-ui/react';

export default function MenuIcon(props) {
  return (
    <Icon {...props} strokeWidth={1.25}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill='none'
        stroke='currentColor'
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </Icon>
  );
}
