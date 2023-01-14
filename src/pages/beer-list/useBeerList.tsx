import { useEffect } from 'react';
import { useBeersService } from './index';

export const useBeerList = () => {
  const {
    refresh,
    beers,
    hasBeers,
    loading: loadingBeers,
    hasPreviousPage,
    nextPage,
    previousPage,
  } = useBeersService();

  useEffect(() => {
    refresh();
  }, []);

  return {
    beers,
    hasBeers,
    loadingBeers,
    hasPreviousPage,
    nextPage,
    previousPage,
  };
};
