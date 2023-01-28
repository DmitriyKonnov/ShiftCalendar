import React from 'react';
import Month from '../../Components/Month/Month';

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const listMonths = months.map((month, index) => {
  return <Month key={index} title={month} />;
});

export const Year = () => {
  return (
    <div className="container mx-auto bg-theme p-6 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xl justify-items-center gap-10">
      {listMonths}
    </div>
  );
};

export default Year;
