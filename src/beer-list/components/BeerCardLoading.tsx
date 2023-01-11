export const BeerCardLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="h-[300px] bg-slate-200 rounded"></div>

      <div className="my-3 grid grid-cols-12 gap-4">
        <div className="h-4 bg-slate-200 rounded col-span-6"></div>
        <div className="h-4 bg-slate-200 rounded col-span-2 col-start-12"></div>
      </div>

      <div className="mb-3 h-2 bg-slate-200 rounded"></div>
      <div className="h-2 bg-slate-200 rounded"></div>
    </div>
  );
};
