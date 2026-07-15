import { createBrowserRouter } from 'react-router';

import MainLayout from '../layouts/MainLayout/MainLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';

import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Product from '../pages/Product/Product';
import Comparison from '../pages/Comparison/Comparison';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import Post from '../pages/Post/Post';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/shop',
        Component: Shop,
      },
      {
        path: '/shop/:productId',
        Component: Product,
      },
      {
        path: '/comparison',
        Component: Comparison,
      },
      {
        path: '/cart',
        Component: Cart,
      },
      {
        path: '/checkout',
        Component: Checkout,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/blog',
        Component: Blog,
      },
      {
        path: '/blog/:postId',
        Component: Post,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/registration',
        Component: Registration,
      },
    ],
  },
]);
