import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; MUTWIRI KITHINJI <br />
        All rights reserved. <br />
        <a href="mailto:kithinjimutwiri1@gmail.com">kithinjimutwiri1@gmail.com</a> <br />
        <a href="tel:+254752958033">+254752958033</a>
      </p>
    </section>
  );
}

export default Footer;
