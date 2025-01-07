import { Link } from "react-router";
import logo from '../../assets/logo.svg';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, Logout } = useContext(AuthContext);

    const navLink = <>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/">Home</Link></li>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/about">About</Link></li>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/services">Services</Link></li>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/blog">Blog</Link></li>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/contact">Contact</Link></li>
    </>


    // Logout User.
    const handleLogout = () => {
        Logout();
    }



    return (
        <div className="navbar bg-base-100 my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
                        {navLink}
                    </ul>
                </div>
                <img className="w-16" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end space-x-6">
                <Link to="/bookings"><HiOutlineShoppingBag title="Cart" className="text-2xl cursor-pointer" /></Link>
                <GoSearch title="Search" className="text-2xl cursor-pointer" />
                {user?.email && <button onClick={handleLogout}><IoIosLogOut title="Logout" className="text-2xl cursor-pointer" /></button>}
                {user?.email ?
                    <Link to="/" className="font-bold hover:bg-[#FF3811] text-[#FF3811] hover:text-white border border-[#FF3811] px-4 py-3 rounded-lg duration-500">Appointment</Link>
                    :
                    <Link to="/login" className="font-bold hover:bg-[#FF3811] text-[#FF3811] hover:text-white border border-[#FF3811] px-4 py-3 rounded-lg duration-500">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;