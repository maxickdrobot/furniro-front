import Browse from './components/Browse/Browse';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Hero />
      <Browse />
      <Products />
    </>
  );
};

export default Home;
