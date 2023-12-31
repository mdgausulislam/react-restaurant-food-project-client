import React, { useContext, useEffect,useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();

    const from =location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const formLogin = event.target;
        const email = formLogin.email.value;
        const password = formLogin.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successfully.",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from,{replace:true});
            })
    }


    const handleValidateCaptcha = (event) => {
        const user_Captcha_Value = event.target.value;
        if (validateCaptcha(user_Captcha_Value) === true) {
            setDisable(false)
        } else {
            setDisable(true);
        }
    }

    return (

        <>
            <Helmet>
                <title> Bistro Boss ! Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover underline text-blue-600">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="type the text captcha above" className="input input-bordered"/>
                            </div>
                            {/* Make button disable for captcha */}
                            <div className="form-control mt-3">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'><small>New Here? <Link to='/signUp'><span className='underline text-blue-600'>Create a New Account</span></Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;