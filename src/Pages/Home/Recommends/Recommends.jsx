import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import recommends from '../../../assets/home/featured.jpg'

const Recommends = () => {
    return (
        <section className='mb-10'>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={'Should Try'}
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={recommends} className="rounded-xl" alt="Album" /></figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-5 text-lg">add to cart</button>
                        </div>
                    </div>
                </div>
               
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={recommends} className="rounded-xl" alt="Album" /></figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                        <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-5 text-lg bg-[#1F2937]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={recommends} className="rounded-xl" alt="Album" /></figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-5 text-lg">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;