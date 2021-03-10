import './App.css';
import Header from './components/Header/Header.jsx';
import Shop from './components/Shop/Shop.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Review from './components/Review/Review.jsx';
import ProductDetailsInfo from './components/ProductDetailsInfo/ProductDetailsInfo.jsx'
import NoFound from './components/NoFound/NoFound.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop/>
          </Route>
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/inventory">
            <Inventory/>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetailsInfo/>
          </Route>
          <Route path="*">
            <NoFound/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

