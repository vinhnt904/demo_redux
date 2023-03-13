import React from 'react';
import {MainScreen} from './Screen-Pages-Modules';
import {Provider} from './providers';

export default function App() {
  return (
    <Provider>
      <MainScreen />
    </Provider>
  );
}
