import React from 'react';
import { Route, Routes } from 'react-router';
import Header from '../../Components/Header/Header';
import MonthBlock from '../MonthBlock/MonthBlock';
import WeekBlock from '../WeekBlock/WeekBlock';
import Year from '../Year/Year';

const months = [
  {
    id: '1',
    title: 'Январь',
    days: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
      27, 28, 29, 30, 31,
    ],
  },
];

export const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Year />} />
        <Route path="/month" element={<MonthBlock />} />
        <Route path="/week" element={<WeekBlock />} />
      </Routes>
    </>
  );
};

export default Home;
