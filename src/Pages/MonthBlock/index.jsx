import React from 'react';
import Month from '../../Components/Month';

export const MonthBlock = () => {
  return (
    <div className="container mx-auto bg-theme p-6 rounded-b-xl">
      <h3 className="text-3xl mb-6">Январь</h3>
      <Month />
    </div>
  );
};

export default MonthBlock;
