import { useState } from 'react';
import { ApiBeer, Beer, BEERS_API, mapApiBeerToBeer } from '../../common';

export const useBeerService = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  const hasBeers = beers.length > 0;
  const hasPreviousPage = page > 1;

  const fetch = async (page: number, perPage: number) => {
    setErrorOccurred(false);
    setLoading(true);
    setBeers([]);

    try {
      const response = await window.fetch(
        `${BEERS_API}?page=${page}&per_page=${perPage}`
      );

      const result = await (response.json() as Promise<ApiBeer[]>);

      setBeers(result.map(mapApiBeerToBeer));
      setPage(page);
      setPerPage(perPage);
    } catch {
      setErrorOccurred(true);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => fetch(page, perPage);

  const nextPage = () => {
    fetch(page + 1, perPage);
  };

  const previousPage = () => fetch(page - 1, perPage);

  return {
    fetch,
    refresh,
    nextPage,
    previousPage,
    beers,
    loading,
    hasBeers,
    errorOccurred,
    hasPreviousPage,
  };
};
