import { Link } from 'react-router';
import type { ProductCardProps } from './ProductCard.types';
import { calculateDiscount } from '@/utils/calculateDiscount';
import { formatPrice } from '@/utils/formatPrice';
import Button from '../Button/Button';
import ShareIcon from '@/assets/icons/share.svg?react';
import CompareIcon from '@/assets/icons/compare.svg?react';
import HeartIcon from '@/assets/icons/heart.svg?react';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, description, price, oldPrice, isNew, image } = product;
  const discount = calculateDiscount(price, oldPrice);

  const handleShare = () => {};
  const handleCompare = () => {};
  const handleLike = () => {};

  return (
    <div className={styles.card}>
      <Link to={'/shop/' + product.id}>
        <img className={styles.picture} src={image} alt={name} />
        <div className={styles.banners}>
          {discount && <div className={styles.discountBanner}>-{discount}%</div>}
          {isNew && <div className={styles.isNewBaner}>New</div>}
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.prices}>
            <p className={styles.price}>Rp {formatPrice(price)}</p>
            {oldPrice && <p className={styles.oldPrice}>Rp {formatPrice(oldPrice)}</p>}
          </div>
        </div>
      </Link>
      <div className={styles.overlay}>
        <Button variant='secondary' className={styles.addToCartBtn}>
          Add to cart
        </Button>
        <div className={styles.productActions}>
          <Button
            icon={<ShareIcon className={styles.icon} />}
            variant='withIcon'
            className={styles.actionBtn}
            onClick={handleShare}
          >
            Share
          </Button>
          <Button
            icon={<CompareIcon className={styles.icon} />}
            variant='withIcon'
            className={styles.actionBtn}
            onClick={handleCompare}
          >
            Compare
          </Button>
          <Button
            icon={<HeartIcon className={styles.icon} />}
            variant='withIcon'
            className={styles.actionBtn}
            onClick={handleLike}
          >
            Like
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
