import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid';
import { Beer, BEERS_ROUTE } from '../../../common';

export const BeerCard = ({
  beer,
  isFavourite,
}: {
  beer: Beer;
  isFavourite?: boolean;
}) => {
  return (
    <Link to={`${BEERS_ROUTE}/${beer.id}`} className="group relative">
      {isFavourite && (
        <HeartIcon
          className="h-6 w-6 text-purple-600 absolute top-4 right-6"
          aria-label="Favourite"
        />
      )}
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden sm:aspect-w-1 sm:aspect-h-1">
          <img
            src={beer.imageSrc}
            alt={beer.imageAlt}
            className="h-full w-full object-contain object-center  group-hover:opacity-75"
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{beer.name}</h3>
        <p>{beer.abv}%</p>
      </div>
      <p className="mt-1 text-sm italic line-clamp-2 text-gray-500">
        {beer.tagline}
      </p>
    </Link>
  );
};
