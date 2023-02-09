import React from 'react';

const daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const listDaysName = daysName.map((dayName, index) => {
  return (
    <li className="text-3xl" key={index}>
      {dayName}
    </li>
  );
});

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
];

const listDays = days.map((day, index) => {
  return (
    <li
      className="border-r hover:bg-fontHover border-b border-font w-full text-center grid content-center aspect-square cursor-pointer"
      key={index}>
      {day}
    </li>
  );
});

export const Month = ({ title }) => {
  return (
    <div className="w-full bg-elemnt rounded-xl p-2">
      <h3 className="text-center text-4xl m-2">{title}</h3>
      <ul className="px-2 grid grid-cols-7 justify-items-center mb-5">{listDaysName}</ul>
      <ul className="grid grid-cols-7 justify-items-center w-full border rounded-xl border-font overflow-hidden">
        {listDays}
      </ul>
    </div>
  );
};

export default Month;
