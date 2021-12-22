import React from 'react';
import oranges from '../images/oranges.jpg';
import bottles from '../images/bottles.jpg';
import palette from '../images/palette.jpg';
import snowboard from '../images/snowboard.jpg';
import leaves from '../images/leaves.jpg';
import desktop from '../images/desktop.jpg';
import sneakers from '../images/sneakers.jpg';
import bicycle from '../images/bicycle.jpg';
import '../styles/gallery.css';

const Gallery = () => {
  return (
    <main>
      <h1>Our finished projects</h1>
      <div className='gallery'>
        <img className='bicycleImg' src={bicycle} alt='bicycle' />
        <img className='bottlesImg' src={bottles} alt='bottles' />
        <img className='leavesImg' src={leaves} alt='leaves' />
        <img className='snowboardImg' src={snowboard} alt='snowboard' />
        <img className='desktopImg' src={desktop} alt='desktop' />
        <img className='sneakersImg' src={sneakers} alt='sneakers' />
        <img className='orangesImg' src={oranges} alt='oranges' />
        <img className='paletteImg' src={palette} alt='palette' />
      </div>
    </main>
  );
};

export default Gallery;
