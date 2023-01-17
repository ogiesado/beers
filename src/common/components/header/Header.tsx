import { HeartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../config';
import { useFavourites } from '../../providers';
import logo from './assets/beer.svg';

export const Header = () => {
  const { favourites } = useFavourites();

  return (
    <header className="py-6 flex border-b border-b-gray-200" role="banner">
      <Link to={HOME_ROUTE} className="flex items-center">
        <img src={logo} className="mr-1" alt="Beers logo" />
        <h1 className="text-2xl font-semibold text-purple-700">Beers</h1>
      </Link>

      <Link
        to="/favourites"
        className="relative p-2 flex items-center ml-auto text-purple-500 hover:text-purple-700 lg:p-0 "
      >
        <HeartIcon className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only lg:not-sr-only">
          Favourites ({favourites.length})
        </span>
      </Link>
    </header>
  );
};
