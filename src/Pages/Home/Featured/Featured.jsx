import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-600 bg-opacity-60 pb-20 pt-12 px-36 space-y-4'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p className='text-2xl'>March 20, 2023</p>
                    <p className='text-2xl'> WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] text-lg rounded-lg px-5 mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;