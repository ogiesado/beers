import { Link } from 'react-router-dom';

export const SubHeading = ({
  title,
  subTitle,
  backNav,
}: {
  title: string;
  subTitle?: string;
  backNav?: { label: string; to: string };
}) => {
  return (
    <div className="my-4">
      {backNav && (
        <Link
          to={backNav.to}
          className="hidden text-sm font-semibold text-purple-600 hover:text-purple-500 sm:block"
        >
          <span aria-hidden="true">&larr; </span>
          {backNav.label}
        </Link>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-gray-600">
        {title}
      </h2>
      {subTitle && <p className="text-gray-500">{subTitle}</p>}
    </div>
  );
};
