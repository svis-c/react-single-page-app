import React from 'react';

const Service = ({ title, body }) => {
  return (
    <div className='serviceBox'>
      <h3>{title}</h3>
      <p> {body}</p>
    </div>
  );
};

export default Service;
