import React from 'react';

const days = [1, 2, 3, 4, 5, 6, 7];
const daysList = days.map((day, index) => {
  return (
    <li
      className="border-r border-font w-full text-center grid content-center aspect-square"
      key={index}>
      {day}
    </li>
  );
});

export const Week = () => {
  return (
    <div className="w-full bg-elemnt rounded-xl">
      <ul className="grid grid-cols-7 justify-items-center w-full border rounded-xl border-font overflow-hidden">
        {daysList}
      </ul>
    </div>
  );
};

export default Week;
