import { useEffect } from 'react';
import { BEERS_ROUTE, SubHeading, useFavourites } from '../../../common';
import { Favourites } from './Favourites';
import { NoFavourites } from './NoFavourites';

export const FavouriteList = () => {
  const { favourites, hasFavourites, removeFavourite } = useFavourites();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {hasFavourites && (
        <SubHeading
          title="Favourites"
          backNav={{ label: 'All beers', to: BEERS_ROUTE }}
        />
      )}
      {!hasFavourites && <NoFavourites />}
      {hasFavourites && (
        <Favourites beers={favourites} removeFromFavourites={removeFavourite} />
      )}
    </>
  );
};
