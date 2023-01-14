import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/20/solid';
import { Beer, BEERS_ROUTE } from '../../../common';

export const Favourites = ({
  beers,
  removeFromFavourites,
}: {
  beers: Beer[];
  removeFromFavourites: (beerId: number) => void;
}) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {beers.map((beer) => (
        <li key={beer.id} className="relative">
          <div className="p-2 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden">
              <img
                src={beer.imageSrc}
                alt={beer.imageAlt}
                className="pointer-events-none object-contain group-hover:opacity-75"
              />
              <Link
                to={`${BEERS_ROUTE}/${beer.id}`}
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {beer.name}</span>
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {beer.name}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                {beer.tagline}
              </p>
            </div>
            <button
              className="ml-auto mt-1"
              onClick={() => removeFromFavourites(beer.id)}
            >
              <HeartIcon className="h-8 w-8 text-purple-600 " />
              <span className="sr-only">
                Remove {beer.name} from favourites
              </span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
