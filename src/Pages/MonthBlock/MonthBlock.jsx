import React from 'react';
import Month from '../../Components/Month/Month';

export const MonthBlock = () => {
  return (
    <div className="container mx-auto bg-theme p-6">
      <h3>Январь</h3>
      <Month />
    </div>
  );
};

export default MonthBlock;
