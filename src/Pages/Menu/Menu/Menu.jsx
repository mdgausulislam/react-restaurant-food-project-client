import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title> Bistro Boss ! Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'our menu'}
                titleDescription={'Would you like to try a dish?'}
            ></Cover>
        </div>
    );
};

export default Menu;