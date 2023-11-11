import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
  
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <BistroBoss></BistroBoss>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;