import { HeartIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { BEERS_ROUTE } from '../../../common';
export const NoFavourites = () => {
  return (
    <div className="text-center">
      <HeartIcon
        className="mt-10 mx-auto h-12 w-12 text-purple-400"
        aria-hidden="true"
      />
      <h3 className="mt-2 text-sm font-medium text-gray-900">No favourites</h3>
      <p className="mt-1 text-sm text-gray-500">
        Check out the beers and select your favourites.
      </p>
      <div className="mt-6">
        <Link
          to={BEERS_ROUTE}
          className="inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Beers
        </Link>
      </div>
    </div>
  );
};
