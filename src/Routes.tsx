import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BEERS_ROUTE, Error, FAVOURITES_ROUTE, HOME_ROUTE } from './common';
import './index.css';
import { BeerDetails } from './pages/beer-details';
import { FavouriteList, BeerList, Home } from './pages';

const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: HOME_ROUTE,
        element: <BeerList />,
        errorElement: <Error />,
      },
      {
        path: BEERS_ROUTE,
        element: <BeerList />,
      },
      {
        path: `${BEERS_ROUTE}/:beerId`,
        element: <BeerDetails />,
        errorElement: <Error />,
      },
      {
        path: FAVOURITES_ROUTE,
        element: <FavouriteList />,
        errorElement: <Error />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
