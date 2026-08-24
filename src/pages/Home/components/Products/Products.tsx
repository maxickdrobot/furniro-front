import ProductCard from '@/components/ProductCard/ProductCard';
import { productsData } from './Products.mock';
import styles from './Products.module.scss';
import Button from '@/components/Button/Button';

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Products</h2>
        <div className={styles.productsList}>
          {productsData.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Button variant='primaryOutline' className={styles.seeMoreBtn}>
          See More
        </Button>
      </div>
    </section>
  );
};

export default Products;
