import React from 'react';

const daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const listDaysName = daysName.map((dayName, index) => {
  return <li key={index}>{dayName}</li>;
});

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
];

const listDays = days.map((day, index) => {
  return (
    <li
      className="border border-font w-full text-center grid content-center aspect-square"
      key={index}>
      {day}
    </li>
  );
});

export const Month = ({ title }) => {
  return (
    <div className="w-full bg-elemnt rounded-xl">
      <h3 className="text-center text-4xl">{title}</h3>
      <ul className="px-2 grid grid-cols-7 justify-items-center">{listDaysName}</ul>
      <ul className="p-2 grid grid-cols-7 justify-items-center w-full">{listDays}</ul>
    </div>
  );
};

export default Month;
