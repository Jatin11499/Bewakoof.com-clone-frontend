import React,{ useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Products from './Products';
import Cart from './Cart';
import OrderSummary from './OrderSummary';
import Success from './Success';
import { Route, Switch } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/men-clothing' render={() => <Products path="Men Clothing" title="Men's Clothing"/>} />
        <Route exact path='/women-clothing' render={() => <Products path="Women Clothing" title="Clothing for Women"/>} />
        <Route exact path='/topwear-for-men-and-women' render={() => <Products path="Men's & Women's Top Wear" title="Men's & Women's Top Wear"/>} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/order-summary' component={OrderSummary} />
        <Route exact path='/success' component={Success} />
      </Switch>
    </div>
  );
}

export default App;
