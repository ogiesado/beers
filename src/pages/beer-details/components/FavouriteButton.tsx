import { HeartIcon } from '@heroicons/react/24/outline';

export const FavouriteButton = ({
  isFavourite,
  onClick,
}: {
  isFavourite: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`flex w-full lg:w-1/2 items-center justify-center rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 py-3 px-8 text-base font-medium text-white ${
        isFavourite
          ? 'hover:bg-red-700 focus:ring-red-500 bg-red-600'
          : 'hover:bg-purple-700 focus:ring-purple-500 bg-purple-600'
      }`}
    >
      <HeartIcon className="h-6 w-6" aria-hidden="true" />
      {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
    </button>
  );
};
