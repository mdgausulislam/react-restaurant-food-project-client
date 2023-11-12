import React, { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    // const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const categories=["salads","pizza","soup","dessert","drinks"]
    const { category } = useParams();
    const initialIndex=categories.indexOf(category);
    // const initialIndex=categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
   
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
             <Helmet>
                <title> Bistro Boss ! Order Food</title>
            </Helmet>
            <Cover
                img={orderCover}
                title='Food Order'
                titleDescription="Would you like to try a dish?"
            ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salads</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Deserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab
                        items={salads}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>   <OrderTab
                    items={pizza}
                ></OrderTab></TabPanel>
                <TabPanel>  <OrderTab
                    items={soups}
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