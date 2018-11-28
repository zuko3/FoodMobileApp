import React, { Component } from 'react';
import Header from "./app-header/Container";
import { getComponentToBeMounted } from "./util/MountUtil";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Main";
import Category from "./category";
import ProductDetails from "./product-details";
import Cart from "./cart-page";
import './App.css';

const Root = (props) => {
  const componentToMount = getComponentToBeMounted(props);
  return (
    <React.Fragment>
      <Header />
      {componentToMount}
    </React.Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Root>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/detail" component={ProductDetails} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </Root>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
