import { createContext, ReactNode, useContext, useRef, useState } from 'react';
import { Beer } from '..';

export const FavouritesContext = createContext<{
  favourites: Beer[];
  hasFavourites: boolean;
  toggleFavourite: (beer: Beer) => void;
  addFavourite: (beer: Beer) => void;
  removeFavourite: (beerId: number) => void;
  isFavourite: (beerId: number) => boolean;
}>({
  favourites: [],
  hasFavourites: false,
  toggleFavourite: () => undefined,
  addFavourite: () => undefined,
  removeFavourite: () => undefined,
  isFavourite: () => false,
});

export const { Provider } = FavouritesContext;

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Beer[]>([]);

  const idsRef = useRef<Set<number>>(new Set());

  const addFavourite = (beer: Beer) =>
    setFavourites((favourites) => {
      idsRef.current.add(beer.id);

      return [...favourites, beer];
    });

  const removeFavourite = (beerId: number) => {
    setFavourites((favourites) => {
      idsRef.current.delete(beerId);

      return favourites.filter((beer) => String(beer.id) !== String(beerId));
    });
  };

  const isFavourite = (beerId: number) => {
    return idsRef.current.has(beerId);
  };

  const toggleFavourite = (beer: Beer) => {
    if (isFavourite(beer.id)) removeFavourite(beer.id);
    else addFavourite(beer);
  };

  const hasFavourites = favourites.length > 0;

  return (
    <Provider
      value={{
        favourites,
        hasFavourites,
        addFavourite,
        removeFavourite,
        isFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </Provider>
  );
};

export const useFavourites = () => {
  return useContext(FavouritesContext);
};
