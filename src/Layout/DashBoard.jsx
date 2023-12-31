import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaFileContract, FaFirstOrder, FaUtensils, FaBook, FaUsers } from 'react-icons/fa'
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCart();

    //TODO: loadData from th server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle bg-base-100" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side md:bg-[#D1A054] sm:bg-base-100">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-base-100"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>

                            <li><NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils /> Add an Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItem'><FaWallet /> Manage Item</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook /> Manage Booking</NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><FaUsers />All Users </NavLink></li>

                        </> : <>

                            <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaCalendarAlt /> Reservations</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                            <li className='flex'>
                                <NavLink to='/dashboard/myCart'><FaShoppingCart /> My Cart
                                    <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'><FaHome /> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaFirstOrder /> Shop</NavLink></li>
                    <li><NavLink to='/contact'><FaFileContract /> Contact</NavLink></li>

                </ul>

            </div>
        </div>

    );
};

export default DashBoard;