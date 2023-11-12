import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
// import Navbar from '../../Shared/NavBar/Navbar';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title> Bistro Boss ! Menu</title>
            </Helmet>
            
            <Cover
                img={menuImg}
                title="our menu"
                titleDescription='Would you like to try a dish?'
            ></Cover>
            {/* main  cover */}
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"Don't miss"}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* deserts menu items */}
            <MenuCategory
                items={desserts}
                title='dessert'
                coverImg={dessertImg}
                titleDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title='pizza'
                coverImg={pizzaImg}
                titleDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
                items={salads}
                title='salad'
                coverImg={saladImg}
                titleDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
                items={soups}
                title='soup'
                coverImg={soupImg}
                titleDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></MenuCategory>

        </div>
    );
};

export default Menu;