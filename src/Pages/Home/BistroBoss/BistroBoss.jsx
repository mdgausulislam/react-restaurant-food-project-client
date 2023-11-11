import React from 'react';
import chefService from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className="hero min-h-screen mb-8 relative" style={{ backgroundImage: `url(${chefService}` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-28 bg-white text-black xl:p-20 sm:p-6 md:p-8 lg:p-12">
                    <h1 className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">Bistro Boss</h1>
                    <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>

                </div>
            </div>
        </div>
    );
};

export default BistroBoss;
