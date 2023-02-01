import React from 'react';
import Week from '../../Components/Week/Week';

const weekName = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];
const weekList = weekName.map((name, index) => {
  return (
    <li className="text-3xl" key={index}>
      {name}
    </li>
  );
});

export const WeekBlock = () => {
  return (
    <div className="container mx-auto bg-theme p-6 rounded-b-xl">
      <ul className="px-2 grid grid-cols-7 justify-items-center mb-6">{weekList}</ul>
      <Week />
    </div>
  );
};

export default WeekBlock;
