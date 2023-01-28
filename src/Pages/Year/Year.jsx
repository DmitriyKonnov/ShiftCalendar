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

export default function Year() {
  return (
    <div className="container mx-auto bg-theme p-6 grid grid-cols-4 justify-items-center gap-10">
      {listMonths}
    </div>
  );
}
