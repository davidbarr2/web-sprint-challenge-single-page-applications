import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {

function order(){

}

  return (
    <>
      <p>Home page</p>
      <Link to='/pizza' id='order-pizza'>Order Pizza</Link>
    </>
  );
};
export default Home;
