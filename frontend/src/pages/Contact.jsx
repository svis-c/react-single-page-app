import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <label>
          E-mail:
          <input type='email' name='email' />
        </label>
        <label>
          Comments:
          <input type='text' name='comments' />
        </label>
        <input
          type='submit'
          value='Submit'
          onClick={() => setMessage('Thank you for contacting us!')}
        />
      </form>
      <p className='contactsMesage'>{message}</p>
    </main>
  );
};

export default Contact;
