import React from 'react';
import { Icon } from '@chakra-ui/react';

export default function LeftArrow(props) {
  return (
    <Icon strokeWidth={2.5} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        trokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </Icon>
  );
}
