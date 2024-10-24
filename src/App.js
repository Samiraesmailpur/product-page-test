import Product from './components/Product/Product';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
