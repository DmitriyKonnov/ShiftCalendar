import React from 'react';
import Month from '../../Components/Month/Month';

export const MonthBlock = () => {
  return (
    <div className="container mx-auto bg-theme p-6 rounded-b-xl">
      <h3 className="text-3xl">Январь</h3>
      <Month />
    </div>
  );
};

export default MonthBlock;
