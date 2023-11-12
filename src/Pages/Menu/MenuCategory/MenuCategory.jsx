import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg, titleDescription }) => {
    return (
        <div className='pt-8'>
            {title && <Cover
                img={coverImg}
                title={title}
                titleDescription={titleDescription}
            ></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            {/* <div className='text-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-5 text-lg bg-[#1F2937]">Order Your Favorite Food </button>
                </Link>
            </div> */}
            <Link to={`/order/${title}`}>  <button className="btn btn-outline border-0 border-b-4 mt-4">Order now </button></Link>
        </div>
    );
};

export default MenuCategory;