import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const btn = e.target.querySelector('input[type="submit"]');
    btn.value = 'Sending...';

    emailjs.sendForm('service_rmn5ngi', 'template_xswbiot', form.current, 'T6itR8RU8Q1NSI0Il')
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (error) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(error));
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="reply_to"
            id="reply_to"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Send Email" />
      </form>
    </section>
  );
}

export default Contact;
