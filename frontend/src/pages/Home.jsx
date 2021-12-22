import React from 'react';
import '../styles/home.css';
import inception from '../images/inception.jpg';

const Home = () => {
  return (
    <main>
      <div className='homePage'>
        <h1>Home page</h1>
        <img className='inception' src={inception} alt='inception' />
      </div>
    </main>
  );
};

export default Home;
