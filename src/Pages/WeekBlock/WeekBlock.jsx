import React from 'react';
import Week from '../../Components/Week/Week';

const weekName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const weekList = weekName.map((name, index) => {
  return (
    <li className="text-5xl" key={index}>
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
