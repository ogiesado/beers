import { Beer } from '../../common';

export const BeerCard = ({ beer }: { beer: Beer }) => {
  return (
    <a href={`/${beer.id}`} className="group">
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
        {beer.description}
      </p>
    </a>
  );
};
