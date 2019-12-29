import React from 'react';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='header-wrap'>
      <Nav />
      <h1>Welcome to CRUD Users!</h1>
    </header>
  );
};