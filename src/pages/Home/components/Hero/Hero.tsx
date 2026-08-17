import Button from '@/components/Button/Button';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.label}>New Arrival</p>
          <h1 className={styles.title}>Discover Our New Collection</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis.
          </p>
          <Button className={styles.buyBtn}>BUY NOW</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
