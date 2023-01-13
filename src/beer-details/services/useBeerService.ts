import { useState } from 'react';
import {
  ApiBeer,
  ApiError,
  Beer,
  BEERS_API,
  mapApiBeerToBeer,
} from '../../common';

export const useBeerService = () => {
  const [beer, setBeer] = useState<Beer | null>(null);

  const [loading, setLoading] = useState(false);

  const [notFound, setNotFound] = useState(false);

  const [errorOccurred, setErrorOccurred] = useState(false);

  const getBeer = async (beerId: number | string) => {
    setLoading(true);
    setBeer(null);
    setNotFound(false);
    setErrorOccurred(false);

    try {
      const response = await window.fetch(`${BEERS_API}/${beerId}`);

      const result = await (response.json() as Promise<ApiBeer[] | ApiError>);

      if ('statusCode' in result && result.statusCode === 404) {
        setNotFound(true);
      } else if ('statusCode' in result) {
        throw new Error(result.message);
      } else {
        setBeer(mapApiBeerToBeer(result[0]));
      }
    } catch {
      setErrorOccurred(true);
    } finally {
      setLoading(false);
    }
  };

  return { beer, notFound, errorOccurred, loading, getBeer };
};
