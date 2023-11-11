import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className='mb-12'>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mt-5'>
                <button className="btn btn-outline uppercase text-[#BB8506] border-0 border-b-4  text-lg rounded-lg px-5 mt-4">View Full Menu</button>
            </div>
        </section >
    );
};

export default PopularMenu;