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
                navigate(from, { replace: true });
                //         const saveUsers = { name: googleLogged.displayName, email: googleLogged.email }
                //         fetch('http://localhost:5000/users', {
                //             method: 'POST',
                //             headers: {
                //                 'content-type': 'application/json'
                //             },
                //             body: JSON.stringify(saveUsers)
                //         })
                //             .then(res => res.json())
                //             .then(data => {
                //                 console.log(data);
                              
                //             })
            })
            .then(error => console.log(error))
    }

    return (
        <div className='text-center pb-5'>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className="btn btn-square btn-outline">
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;