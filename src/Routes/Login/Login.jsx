import { Link, useLocation, useNavigate } from 'react-router';
import logo from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SecondNav from '../Shared/SecondNav';
import axios from 'axios';


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { SigninUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;

        // Login User Function.
        SigninUser(email, password)
            .then(result => {
                if (result.user) {
                    const user = { email };
                    axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
                        .then(result => {
                            console.log(result.data);
                            if (result.data.success) {
                                navigate(location.state ? location.state : "/");
                            }
                        })
                        .catch(error => {
                            console.log(error.message)
                        })
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    };


    return (
        <div className='max-w-7xl mx-auto px-2'>
            <SecondNav />
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={logo} alt="" />
                </div>
                <div className="card w-1/2 border border-black px-5 py-16">
                    <h1 className='font-semibold text-4xl text-[#444444] text-center'>Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-lg text-[#444444] mb-2 mt-4">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="px-4 py-3 border border-black outline-0 rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-lg text-[#444444] mb-2 mt-4">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="px-4 py-3 border border-black outline-0 rounded-md" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value="Login" className="font-semibold text-lg hover:bg-[#FF3811] text-[#FF3811] hover:text-white border border-[#FF3811] px-6 py-3 rounded-lg duration-500 cursor-pointer" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or Login With</p>
                        <button className='btn'>X</button>
                        <button className='btn'>X</button>
                        <button className='btn'>X</button>
                    </div>
                    <p className='font-semibold text-lg text-[#737373] text-center'>New To Car-Doctor?  <Link className='text-[#FF3811]' to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;