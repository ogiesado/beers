import { HeartIcon } from '@heroicons/react/24/outline';
import logo from './assets/beer.svg';

export const Header = () => {
  return (
    <header className="py-6 flex border-b border-b-gray-200">
      <a href="/" className="flex items-center">
        <img src={logo} className="mr-1" alt="Beers logo" />
        <h1 className="text-2xl font-semibold text-purple-700">Beers</h1>
      </a>

      <a
        href="/favourites"
        className="relative p-2 flex items-center ml-auto text-purple-500 hover:text-purple-700 lg:p-0 "
      >
        <HeartIcon className="h-6 w-6 animate-bounce" aria-hidden="true" />
        <span className="animate-bounce sr-only lg:not-sr-only">
          Favourites
        </span>
      </a>
    </header>
  );
};
