import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const googleLogged = result.user;
                console.log(googleLogged);
                const saveUsers = { name: googleLogged.displayName, email: googleLogged.email }
                fetch('https://restaurant-food-project-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUsers)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div className='text-center pb-4'>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className="btn btn-square btn-outline">
                <FaGoogle className='text-red-600'/>
            </button>
        </div>
    );
};

export default SocialLogin;