import { ReactNode } from 'react';

export const PaginationButton = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center pt-4 pl-1 text-sm font-medium text-purple-500  hover:text-purple-700 ${
        className ?? ''
      }`}
    >
      {children}
    </button>
  );
};
