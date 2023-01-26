import React from 'react';
import { Route, Routes } from 'react-router';
import Header from '../../Components/Header/Header';
import Year from '../Year/Year';

export default function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Year />} />
      </Routes>
    </>
  );
}
