import { Link } from 'react-router';
import dining from '@/assets/images/dining.jpg';
import living from '@/assets/images/living.jpg';
import bedroom from '@/assets/images/bedroom.jpg';
import styles from './Browse.module.scss';

const Browse = () => {
  return (
    <section className={styles.browse}>
      <div className={styles.container}>
        <h2 className={styles.title}>Browse the range</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul className={styles.categories}>
          <li className={styles.category}>
            <Link to='/shop?category=dining' className={styles.categoryLink}>
              <img className={styles.categoryPicture} src={dining} alt='' />
              <h3 className={styles.categoryTitle}>Dining</h3>
            </Link>
          </li>
          <li className={styles.category}>
            <Link to='/shop?category=living' className={styles.categoryLink}>
              <img className={styles.categoryPicture} src={living} alt='' />
              <h3 className={styles.categoryTitle}>Living</h3>
            </Link>
          </li>
          <li className={styles.category}>
            <Link to='/shop?category=bedroom' className={styles.categoryLink}>
              <img className={styles.categoryPicture} src={bedroom} alt='' />
              <h3 className={styles.categoryTitle}>Bedroom</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Browse;
