import React from 'react';
import { Routes } from './Routes';
import './index.css';
import { FavouritesProvider } from './common/providers';

export const App = () => {
  return (
    <React.StrictMode>
      <FavouritesProvider>
        <Routes />
      </FavouritesProvider>
    </React.StrictMode>
  );
};
