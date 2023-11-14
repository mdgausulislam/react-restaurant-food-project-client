import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate =useNavigate();
    const location=useLocation();
    const [,refetch]=useCart();

    const handleAddTOCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem= {menuItemId:_id, name, image, price,email:user.email}

            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the number of items in the carts
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Food added on the cart saved.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        } else {
            Swal.fire({
                title: "please login to order the food?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now!"
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login',{state: {from:location}})
                }
            });
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="food" /></figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 py-2 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddTOCart(item)} className="btn uppercase text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-5 text-lg">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;