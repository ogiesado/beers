export const BeerImage = ({
  src,
  alt,
  loading = false,
}: {
  src?: string;
  alt?: string;
  loading: boolean;
}) => {
  return loading ? (
    <div className="animate-pulse h-full w-[90%] mr-8 bg-slate-200 rounded-lg"></div>
  ) : (
    <div className="flex justify-center lg:justify-start p-4 rounded-lg">
      <div className="overflow-hidden aspect-w-1 aspect-h-1 w-[120px] h-[100px] lg:w-[300px] lg:h-[600px]">
        <img src={src} alt={alt} className="object-contain object-center" />
      </div>
    </div>
  );
};
