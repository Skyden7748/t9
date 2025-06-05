import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Dialog,
  DialogContent,
} from "./ui/dialog"

export function DBox({ open, setOpen }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wl1s9l7', 'template_28w0k2d', form.current, {
        publicKey: 'jpLHwZ4Nr6v4ozupx',
      })
      .then(
        () => {
          
          setTimeout(() => {
          form.current.reset();
          setOpen(false); // Close the dialog after 1s
        }, 200);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-black">
        <ToastContainer />
        <div className='form-container'>
          <form ref={form} className="form" onSubmit={sendEmail}>
            <div className="title">Contact us</div>
            <input type="text" placeholder="Name" className="input" name="p_name" required />
            <input type="email" placeholder="Email Id" className="input" name="p_email" required />
            <input type="tel" placeholder="Phone Number" className="input" name="p_phone" />
            <textarea placeholder="What’s on your mind?" className="textarea" name="p_message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
