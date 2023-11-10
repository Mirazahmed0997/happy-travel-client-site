import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import Swal from 'sweetalert2';
import signUpIMG from '../assets/signupIMG-removebg-preview.png'
import SocialLOgin from '../SocialLogin/SocialLOgin';

const Signup = () => {
    const { createUser,updateUserInfo } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                updateUserInfo(data.name,data.email)
                .then(()=>
                {
                    console.log('User Info Updated')
                })
                .catch(error=>console.log(error))
                reset();
                Swal.fire({
                    title: 'Successfully Signed in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate('/')
            })
    }



    return (
        <div className="hero min-h-screen bg-blue-500 ">
            <div className="hero-content flex-col lg:flex-row md:flex mt-24">
                <div className="text-center md:w-full lg:text-left mx-16 shadow-2xl">

                    <img className='' src={signUpIMG} alt="" />

                </div>

                {/* this form is formatted with react-hook-form */}

                <div className="card flex-shrink-0 md:w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className='card-body' >

                        {/* NAME FIELD */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}

                        </div>

                        {/* EMAIL FIELD */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"{...register("email", { required: true })} name='email' className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>


                        {/* PASSWORD FIELD */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"{...register("password", {

                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/

                            })} name='password' className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>Atleast 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500'> password must be below 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one uppercase, one lowercase and special character</span>}

                        </div>


                        {/* PHOTO FIELD */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photoURL" {...register("photoURL", { required: true })} className="input input-bordered" />
                            {errors.photoURL && <span className='text-red-500'>This field is required</span>}

                        </div>


                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value='Sign Up'></input>
                        </div>
                    </form>
                    <p className='text-center mb-2'><small>Already have an Account? <Link className='text-red-500' to='/login'>Login</Link></small></p>
                    <SocialLOgin></SocialLOgin><br />
                </div>
            </div>
        </div>
    );
};

export default Signup;