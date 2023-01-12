import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './common';
import './index.css';
import { BeerList } from './beer-list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <BeerList />,
      },
      {
        path: 'beers',
        element: <BeerList />,
      },
      {
        path: 'beers/:beerId',
        element: <p>single beer</p>,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
