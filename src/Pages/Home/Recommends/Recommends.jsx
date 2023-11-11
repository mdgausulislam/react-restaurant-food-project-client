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

            <div className='grid md:grid-cols-3 gap-6'>
                <div className="card w-[424px] bg-base-100 shadow-xl">
                    <img src={recommends} alt="Shoes" className="rounded-xl" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-2xl">Caeser Salad</h2>
                        <p className='px-5'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] text-lg rounded-lg px-5">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[424px] bg-base-100 shadow-xl">
                    <img src={recommends} alt="Shoes" className="rounded-xl" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-2xl">Caeser Salad</h2>
                        <p className='px-5'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-5 text-lg bg-[#1F2937]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[424px] bg-base-100 shadow-xl">
                    <img src={recommends} alt="Shoes" className="rounded-xl" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-2xl">Caeser Salad</h2>
                        <p className='px-5'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-5 text-lg">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;