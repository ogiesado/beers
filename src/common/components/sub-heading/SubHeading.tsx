export const SubHeading = ({
  title,
  backNav,
}: {
  title: string;
  backNav?: { label: string };
}) => {
  return (
    <div className="my-4">
      {backNav && (
        <a
          href="#"
          className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          <span aria-hidden="true">&larr; </span>
          {backNav.label}
        </a>
      )}
      <h2 className="text-2xl xfont-semibold tracking-tight text-gray-600">
        {title}
      </h2>
    </div>
  );
};
