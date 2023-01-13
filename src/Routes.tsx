import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './common';
import './index.css';
import { BeerList } from './beer-list';
import { BeerDetails } from './beer-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <BeerList />,
        errorElement: <Error />,
      },
      {
        path: 'beers',
        element: <BeerList />,
      },
      {
        path: 'beers/:beerId',
        element: <BeerDetails />,
        errorElement: <Error />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
