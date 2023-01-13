import { ReactNode } from 'react';

export const BeerSection = ({
  title,
  children,
  border,
  margin,
  loading = false,
}: {
  title?: string;
  children?: ReactNode;
  border?: boolean;
  margin?: boolean;
  loading?: boolean;
}) => {
  if (loading) return <Skeleton />;
  return (
    <div
      className={`${margin ? 'mt-8' : ''} ${
        border ? 'border-t border-gray-200' : ''
      } pt-8`}
    >
      <h2 className="text-sm font-medium text-gray-900">{title}</h2>

      <div className="prose prose-sm mt-4 text-gray-500">{children}</div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="animate-pulse mt-10">
      <div className="w-full max-w-[250px] h-5 bg-slate-200 rounded-lg"></div>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="mt-4 w-full max-w-[350px] h-3 bg-slate-200 rounded-lg"
          ></div>
        ))}
    </div>
  );
};
