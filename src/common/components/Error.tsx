import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../config';

export const Error = ({
  title = 'Aarg!',
  message = 'Sorry, an unexpected error has occurred.',
}) => {
  return (
    <div className="flex flex-col justify-center items-center h-[450px]">
      <h1 className="text-2xl">{title}</h1>
      <p>{message}</p>
      <Link
        to={HOME_ROUTE}
        className="flex mt-10 w-[100px] items-center justify-center rounded-md border border-transparent bg-purple-600 py-3 px-8 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        HOME
      </Link>
    </div>
  );
};
