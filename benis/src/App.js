import './App.css';
import React from 'react';
import Header from './modules/Header'
import MainPage from './modules/MainPage'
import GyIK from './modules/GyIK'
import Footer from './modules/Footer'
import { Switch, Route } from 'react-router-dom';
import ProductDetails from './modules/ProductDetails'
import ProductsPage from './modules/ProductsPage'
import Cart from './modules/Cart';
import Profile from './modules/Profile';
import { useSelector } from 'react-redux';
import AuthDialog from './modules/AuthDialog';
import Contact from './modules/Contact';

function App() {

  const loginSelector = state => state.authDialog
  const showLogin = useSelector(loginSelector)

  return (
    <React.Fragment>
      <div className="App">
        {showLogin.show && <AuthDialog />}
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/gyik" component={GyIK}></Route>
          <Route exact path="/product/:id" component={ProductDetails}></Route>
          <Route exact path="/products" component={ProductsPage}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
