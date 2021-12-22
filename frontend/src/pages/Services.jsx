import React from 'react';
import Service from '../components/Service';
import '../styles/services.css'

const Services = () => {
  return (
    <main>
      <h1>Services</h1>
      <div className='services'>
      <Service
        title='Advertising'
        body='Hire our expert designers and get a professional add design you will love'
      />
      <Service
        title='Web Pages'
        body='Create a professional website. 1000s of free images. Custom domain name. Top industry hosting. 100s of Apps. Market leaders.  '
      />
      <Service
        title='Copy Writing'
        body='Professional media publications in any topic.'
      /></div>
    </main>
  );
};

export default Services;
