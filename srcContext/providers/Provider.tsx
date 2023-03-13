import React from 'react';
import {DogProvider} from './DogContext';

type Props = {
  children: React.ReactNode;
};

export default function Provider(props: Props) {
  return <DogProvider>{props.children}</DogProvider>;
}
