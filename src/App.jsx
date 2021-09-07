import { React, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { productsLists } from './mock';
// eslint-disable-next-line import/named
import { ProductsList } from './components/ProductsList/ProductsList';
import { Details } from './components/Details/Details';

export const App = () => {
  // eslint-disable-next-line max-len
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || productsLists);

  if (!JSON.parse(localStorage.getItem('products'))) {
    localStorage.setItem('products', JSON.stringify(productsLists));
  }

  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          component={props => (
            <ProductsList
              products={products}
              {...props}
            />
          )}
        />
        <Route
          path="/details/:id"
          component={props => (
            <Details
              setProducts={setProducts}
              products={products}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
};
