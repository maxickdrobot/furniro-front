import { NavLink } from 'react-router';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import Input from '../Input/Input';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.brand}>
            <h2 className={styles.brandTitle}>Furniro.</h2>
            <address className={styles.address}>
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
            </address>
          </section>
          <nav className={styles.navbar}>
            <section className={styles.column}>
              <h2 className={styles.columnTitle}>Links</h2>
              <ul className={styles.links}>
                <li className={styles.link}>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className={styles.link}>
                  <NavLink to='/shop'>Shop</NavLink>
                </li>
                <li className={styles.link}>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li className={styles.link}>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              </ul>
            </section>
            <section className={styles.column}>
              <h2 className={styles.columnTitle}>Help</h2>
              <ul className={styles.links}>
                <li className={styles.link}>
                  <NavLink to='/payment-options'>Payment Options</NavLink>
                </li>
                <li className={styles.link}>
                  <NavLink to='/returns'>Returns</NavLink>
                </li>
                <li className={styles.link}>
                  <NavLink to='/privacy-policies'>Privacy Policies</NavLink>
                </li>
              </ul>
            </section>
            <section className={styles.newsletter}>
              <h2 className={clsx(styles.newsletterTitle, styles.columnTitle)}>Newsletter</h2>
              <form action=''>
                <div className={styles.emailInput}>
                  <Input type='email' variant='secondary' placeholder='Enter Your Email Address' />
                  <Input type='submit' variant='secondary' value='Subscribe' />
                </div>
              </form>
            </section>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p>2023 Furniro. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
