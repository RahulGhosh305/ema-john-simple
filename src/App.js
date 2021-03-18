import './App.css';
import Header from './components/Header/Header.jsx';
import Shop from './components/Shop/Shop.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Review from './components/Review/Review.jsx';
import ProductDetailsInfo from './components/ProductDetailsInfo/ProductDetailsInfo.jsx'
import NoFound from './components/NoFound/NoFound.jsx';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import { createContext, useState } from 'react';
import PrivateRoute from './components/privateRoute/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export const userContext = createContext()


function App() {
  const [loggedUser, setLoggedUser] = useState({})
  return (
    <userContext.Provider value={[loggedUser, setLoggedUser]}>
      <h3>Email {loggedUser.email}</h3>

      
      <Router>
        <Header/>

        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory />
          </PrivateRoute>
          <Route path="/product/:productKey">
            <ProductDetailsInfo />
          </Route>
          <Route path="/login">
            <Login />      
          </Route>
          <PrivateRoute path="/shipping">
            <Shipping />
          </PrivateRoute>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>

    </userContext.Provider>
  );
}

export default App;

