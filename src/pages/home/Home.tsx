import { Header } from '../../common';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container mx-auto p-4 sm:p-0">
      <Header />
      <Outlet />
    </div>
  );
};
