import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import ProductIndex from './pages/ProductPage/ProductPage.component';
import Product from './components/product/product.component';

import { Provider } from './context/GlobalContext';
import NotFound from './components/not-found/not-found.component';

const App = () => {
  return (
    <Provider>
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="product" element={<ProductIndex />}>
              <Route path=':slug' element={<Product/>} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
