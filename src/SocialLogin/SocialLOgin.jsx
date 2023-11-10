import { useContext } from 'react';
import { FaBeer, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLOgin = () => {

    const {googleSignIn}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleGoogleSignIn=()=>
    {
        googleSignIn()
        .then(result=>
            {
                const loggedinUser=result.user
                navigate(from, { replace: true });

            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center w-full'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLOgin;