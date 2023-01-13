export const BeerContents = ({
  ph,
  ibu,
  abv,
  loading = false,
}: {
  ph?: number;
  abv?: number;
  ibu?: number;
  loading?: boolean;
}) => {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {loading ? (
          <Skeleton />
        ) : (
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              ALC. BY VOL.
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {abv}%
            </dd>
          </div>
        )}
        {loading ? (
          <Skeleton />
        ) : (
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              BITTERNESS
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {ibu}
            </dd>
          </div>
        )}
        {loading ? (
          <Skeleton />
        ) : (
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">PH</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {ph}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div>
      <div className="animate-pulse w-28  h-4 bg-slate-200 rounded-lg"></div>
      <div className="animate-pulse mt-4 w-14 h-10 bg-slate-200 rounded-lg"></div>
    </div>
  );
};
