import React from 'react';
import { Icon } from '@chakra-ui/react';

export default function RightArrow(props) {
  return (
    <Icon strokeWidth={2.5} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        trokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </Icon>
  );
}
