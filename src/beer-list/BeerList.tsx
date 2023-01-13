import { SubHeading } from '../common';
import { Pagination, BeerCard, BeerCardLoading } from './index';
import { useBeerList } from './useBeerList';

export const BeerList = () => {
  const {
    beers,
    loadingBeers,
    hasBeers,
    hasPreviousPage,
    nextPage,
    previousPage,
  } = useBeerList();

  return (
    <>
      <SubHeading loading={!hasBeers && loadingBeers} title="All Beers" />

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6  sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {hasBeers
          ? beers.map((beer) => <BeerCard key={beer.id} beer={beer} />)
          : null}

        {loadingBeers
          ? Array(12)
              .fill(null)
              .map((_, index) => <BeerCardLoading key={index} />)
          : null}
      </div>

      {hasBeers ? (
        <Pagination
          onNext={nextPage}
          onPrevious={previousPage}
          hasPrevious={hasPreviousPage}
        />
      ) : null}
    </>
  );
};
