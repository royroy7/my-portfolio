import React, { useRef } from "react";
import './Contact.css';
import FBicon from '../../assets/fb-icon.png';
import IGicon from '../../assets/ig-icon.png';
import YTicon from '../../assets/yt-icon.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70ia0mp', 'template_twzsp2g', form.current, 'leDstEGs79kRmpGw6')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      
      <div id="contact-content">
      <h1 className='contact-title'>Contact Me</h1> 

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" name="your_name" placeholder="Your Name" />
          <input type="email" className="email" name="your_email" placeholder="Your Email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit</button>
          
          <div className="links">
            <img src={FBicon} alt="Facebook" className="link"/>
            <img src={IGicon} alt="Instagram" className="link"/>
            <img src={YTicon} alt="Youtube" className="link"/>
          </div>

        </form>
      </div>
    </section>
  );
}


export default Contact;
