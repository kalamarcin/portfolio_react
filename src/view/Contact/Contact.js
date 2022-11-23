import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className="body-section">
    <section className='form-section-grid'>

      <div className="cell-form">
        <div className="tex-content">
          <p>sfghdfghsdfghfgyhjdfghj</p>
        </div>
    </div>

    <div className="cell-form">
    <form ref={form} onSubmit={sendEmail}>
      
      <input type="text" name="user_name" placeholder='NAME' />
      
      <input type="email" name="user_email" placeholder='EMAIL' />
      
      <textarea name="message" placeholder='MESSAGE' />
      <button className='submit' type="submit" value="Send">
        SEND MESSAGE
        </button>
    </form>
    </div>

    </section>
    </div>
    </>
  );
};

export default Contact