import React from 'react';
import { Route, Routes } from 'react-router';
import Header from '../../Components/Header/Header';
import MonthBlock from '../MonthBlock/MonthBlock';
import Year from '../Year/Year';

export const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Year />} />
        <Route path="/Month" element={<MonthBlock />} />
      </Routes>
    </>
  );
};

export default Home;
