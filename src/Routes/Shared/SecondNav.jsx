import { Link } from 'react-router';
import logo from '../../assets/logo.svg'

const SecondNav = () => {

    const navLink = <>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/Orders">Order</Link></li>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/Order-review">Order Review</Link></li>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/manage-inventory">Manage Inventory</Link></li>
        <li className='font-semibold text-lg text-[#444444]'><Link to="/login">Login</Link></li>
    </>



    return (
        <div className="navbar justify-between bg-base-100 my-4">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <img className='w-16' src={logo} alt="" />
            </div>
            <div className="hidden md:flex justify-end">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
        </div>
    );
};

export default SecondNav;