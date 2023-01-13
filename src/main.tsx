import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import './index.css';
import { FavouritesProvider } from './common/providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FavouritesProvider>
      <Routes />
    </FavouritesProvider>
  </React.StrictMode>
);
