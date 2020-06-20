import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { Provider } from './context/GlobalContext';


const App = () => {
  return (
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
