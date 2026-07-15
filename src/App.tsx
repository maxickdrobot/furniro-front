import { RouterProvider } from 'react-router';
import './App.scss';
import { router } from './routes';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
