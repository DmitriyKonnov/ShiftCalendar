import React, { useState } from 'react';

const daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const listDaysName = daysName.map((dayName, index) => {
  return (
    <li className="text-xl" key={index}>
      {dayName}
    </li>
  );
});

export const Month = ({ month }) => {
  const [addDay, setAddDay] = useState(false);
  function onChangeDays() {
    setAddDay(!addDay);
  }

  return (
    <div className="w-full bg-elemnt rounded-xl p-2">
      <h3 className="text-center text-4xl m-2">{month.title}</h3>
      <ul className="px-2 grid grid-cols-7 justify-items-center mb-2">{listDaysName}</ul>
      <ul className="grid grid-cols-7 justify-items-center w-full border rounded-xl border-font overflow-hidden">
        {month.days.map((day, index) => (
          <li
            onClick={onChangeDays}
            className={`${
              addDay === true ? 'bg-active' : ''
            } border-r hover:bg-hover border-b border-font w-full text-center grid content-center aspect-square cursor-pointer`}
            key={index}>
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Month;
