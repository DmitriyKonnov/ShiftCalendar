import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="container mx-auto bg-main text-font p-6 text-2xl rounded-t-xl">
      <ul className="flex gap-12 ml-8">
        <li>
          <Link to="/">Год</Link>
        </li>
        <li>
          <Link to="/">Месяц</Link>
        </li>
        <li>
          <Link to="/">Неделя</Link>
        </li>
      </ul>
    </div>
  );
}
