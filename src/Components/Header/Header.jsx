import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="container mx-auto bg-main text-font p-6 text-2xl rounded-t-xl">
      <ul className="flex gap-12">
        <li>
          <Link to="/">Год</Link>
        </li>
        <li>
          <Link to="/Month">Месяц</Link>
        </li>
        <li>
          <Link to="/">Неделя</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;