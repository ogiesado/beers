import { useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useParams, useNavigate } from 'react-router-dom';
import { BEERS_ROUTE, SubHeading, Error } from '../common';
import { useBeerService } from './services';
import { BeerContents, BeerImage, BeerSection } from './components';

export const BeerDetails = () => {
  const { beerId } = useParams();

  const navigate = useNavigate();

  const { beer, loading, notFound, errorOccurred, getBeer } = useBeerService();

  useEffect(() => {
    if (beerId) getBeer(beerId);
  }, [beerId]);

  useEffect(() => {
    if (errorOccurred) navigate(BEERS_ROUTE);
  }, [errorOccurred]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (errorOccurred) return null;

  if (notFound)
    return (
      <Error
        title="Not found"
        message="Sorry, the beer you are looking for was not found."
      />
    );

  return (
    <>
      <SubHeading
        title={beer?.name}
        subTitle={beer?.tagline}
        loading={loading}
        backNav={{ label: 'All Beers', to: '/beers' }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="lg:basis-1/3">
          <BeerImage
            loading={loading}
            src={beer?.imageSrc}
            alt={beer?.imageAlt}
          />
        </div>
        <div className="lg:basis-2/3 ">
          <BeerContents
            loading={loading}
            abv={beer?.abv}
            ibu={beer?.ibu}
            ph={beer?.ph}
          />

          <BeerSection loading={loading} title="Description">
            {beer?.description}
          </BeerSection>

          <BeerSection border margin loading={loading} title="Food pairings">
            <ul role="list">
              {beer?.foodPairings?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </BeerSection>

          <BeerSection border margin loading={loading} title="Brewer's Tip">
            {beer?.tip}
          </BeerSection>

          <div className="mt-8">
            {loading && (
              <div className="animate-pulse w-full lg:w-1/2 h-12 bg-slate-200 rounded-lg"></div>
            )}
            {beer && !loading && (
              <button
                type="submit"
                className="flex w-full lg:w-1/2 items-center justify-center rounded-md border border-transparent bg-purple-600 py-3 px-8 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <HeartIcon className="h-6 w-6" aria-hidden="true" />
                Add to favourites
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
