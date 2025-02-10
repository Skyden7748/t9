import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './Contact.css';
import {  toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  // useEffect(() => {
  //   toast.success("Toast is working!");
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wl1s9l7', 'template_28w0k2d', form.current, {
        publicKey: 'jpLHwZ4Nr6v4ozupx',
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
        },
        (error) => {
          toast.error(error.text);
        },
      );
      setTimeout(() => {
        form.current.reset();
      }, 500);
  };
  return (
    
    <div className='main-stuff'>
      <ToastContainer />
      <div className='heading'>
        <div className='sub-heading'>
          <h1>Get In Touch</h1>
          <p>Partner with us for innovative digital solutions that elevate user experiences and drive your business forward.</p>
        </div>
      </div>
      <div className='content'>
        <div className='map'>
        <iframe 


          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14972.075446182478!2d85.7781275!3d20.2580525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7e9e8d3574f%3A0xbca1163a0b93512d!2sKhandagiri%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1736677839106!5m2!1sen!2sin" 
          width="1920" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
        <div className='contact-us'>
         <div className='contact-us-left'> 
          <div className='contact-us-left-lines-container'>
                <div className='contact-us-line'>
                     <h1>Address</h1>
                     <p><span className='iconss'>< FaMapMarkerAlt /></span> Jagamara, Khandagiri, Bhubaneswar</p>
                 </div>
                 <div className='contact-us-line'>
                     <h1>Mobile</h1>
                     <p><span className='iconss'>< FaPhone /></span> +91 9348711458</p>
                  </div>
                 <div className='contact-us-line'>
                     <h1>Email</h1>
                     <p><span className='iconss'>< FaEnvelope /></span> tribe-9.info@gmail.com</p>
                 </div>
          </div> 
          
           </div>
         <div className='contact-us-right'> 
             <div className='form-container'>
             
             <form ref={form} className="form" onSubmit={sendEmail}>
      <div className="title">Contact us</div>
      <input type="text" placeholder="Name" className="input" name='p_name' />
      <input type="text" placeholder="Email Id" className="input" name='p_email' />
      <input type="text" placeholder='Phone Number' className="input" name='p_phone' />
      <input type="text" placeholder="Subject" className="input" name='p_subject' />

      <textarea placeholder="Message" className="textarea" name='p_message'></textarea>
      <button type="submit" >Submit</button>
    </form>
            </div> 
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Contact;
