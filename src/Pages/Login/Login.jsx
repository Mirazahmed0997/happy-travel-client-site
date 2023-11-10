import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginIMG from '../../assets/loginImg-removebg-preview.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import SocialLOgin from '../../SocialLogin/SocialLOgin';



const Login = () => {

    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'




    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: 'Successfully Logged in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                setSuccess(true)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginIMG} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control ">
                            <input className="btn btn-primary" type='submit' value='Login'></input>
                        </div>
                        <p className='text-center mb-2'><small>don't have account? <Link className='text-red-500' to='/signup'>Sign up</Link></small></p>
                        <SocialLOgin></SocialLOgin>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;