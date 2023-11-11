import React from 'react';
import chefService from '../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className="hero min-h-screen mb-8" style={{ backgroundImage: `url(${chefService}` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="mx-28 bg-white text-black p-20">
                    <h1 className="mb-5 text-4xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>

                </div>
            </div>
        </div>
    );
};

export default BistroBoss;
