import React from 'react';
import loading from '../images/loading.jpg';
import '../styles/about.css';

const About = () => {
  return (
    <main>
      <h1>About page</h1>
      <div className='aboutUs'>
        <p>
          The page about us is often used by all types of businesses to give
          customers more understanding of who is involved in a given business
          and what it does. Business history is often provided, and the history
          of the people in charge is often presented in short, often accompanied
          by photographs.
          <br /> <br />
          Depending on the particular company, other information relating to the
          intentions, attitudes or other aspects of the culture that are not
          directly bound to business practices is also included. About us page
          often reveals the purpose and personality of the business and its
          owners.
          <br /> <br />
          Finally, this page may also include contact or location details.
          Another way to look at the idea about us is to make an image or a
          brief history of a business.
        </p>
        <div>
          <img className='loadingImg' src={loading} alt='loading' />
        </div>
      </div>
    </main>
  );
};

export default About;
