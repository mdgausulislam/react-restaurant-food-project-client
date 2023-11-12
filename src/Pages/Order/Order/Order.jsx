import React, { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    console.log(categories);
    const { category } = useParams();
    console.log(category);

    const initialIndex=categories.indexOf(category);
    console.log(initialIndex);


    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
   console.log(menu);

    const desserts= menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
             <Helmet>
                <title> Bistro Boss ! Order Food</title>
            </Helmet>
            <Cover
                img={orderCoverImg}
                title='Food Order'
                titleDescription="Would you like to try a dish?"
            ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab
                        items={salad}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>   <OrderTab
                    items={pizza}
                ></OrderTab></TabPanel>
                <TabPanel>  <OrderTab
                    items={soup}
                ></OrderTab></TabPanel>
                <TabPanel>  <OrderTab
                    items={desserts}
                ></OrderTab></TabPanel>
                <TabPanel>  <OrderTab
                    items={drinks}
                ></OrderTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;