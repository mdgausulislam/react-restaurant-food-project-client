import React from 'react';

const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="food" /></figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 py-2 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-5 text-lg">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;