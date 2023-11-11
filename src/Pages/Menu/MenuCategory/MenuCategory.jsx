import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ item, title,coverImg,titleDescription }) => {
    return (
        <div className='pt-8'>
            {title && <Cover
                img={coverImg}
                title={title}
                titleDescription={titleDescription}
            ></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-16'>
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;