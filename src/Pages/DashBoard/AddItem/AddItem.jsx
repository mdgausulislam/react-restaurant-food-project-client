import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);
    return (
        <div className='w-full px-16'>
            <Helmet>
                <title>Bistro Boss | Add Item</title>
            </Helmet>
            <SectionTitle
                heading="What's new"
                subHeading='Add an Item'
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                    {...register("name", {required: true, maxLength: 120})}
                     className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex justify-between items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })} className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Deserts</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold"> Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div className='text-center my-5'>
                    <input type="submit" className='btn btn-primary' value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;