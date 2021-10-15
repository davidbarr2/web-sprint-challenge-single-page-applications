import React from "react";
import {Route} from 'react-router-dom'

import Home from './components/Home'
import Order from './components/Order'

const App = () => {
  return (
    <div>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/pizza'>
        <Order></Order>
      </Route>
    </div>
  );
};
export default App;
