import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import Recommends from '../Recommends/Recommends';
import Featured from '../Featured/Featured';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommends></Recommends>
            <Featured></Featured>
        </div>
    );
};

export default Home;