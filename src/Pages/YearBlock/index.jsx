import React from 'react';
import Month from '../../Components/Month';

export const Year = ({ months }) => {
  const listMonths = months.map((month, index) => {
    return <Month key={index} month={month} />;
  });

  return (
    <div className="container mx-auto bg-theme p-6 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center gap-10 rounded-b-xl">
      {listMonths}
    </div>
  );
};

export default Year;
