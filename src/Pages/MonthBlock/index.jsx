import React from 'react';
import Month from '../../Components/Month';

export const MonthBlock = ({ months }) => {
  return (
    <div className="container mx-auto bg-theme p-6 rounded-b-xl">
      <h3 className="text-3xl mb-6">{months[2].title}</h3>
      <Month month={months[2]} />
    </div>
  );
};

export default MonthBlock;
