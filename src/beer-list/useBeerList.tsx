import { useEffect } from 'react';
import { useBeerService } from './index';

export const useBeerList = () => {
  const {
    refresh,
    beers,
    hasBeers,
    loading: loadingBeers,
    hasPreviousPage,
    nextPage,
    previousPage,
  } = useBeerService();

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
