import React from 'react';
import SectionTitle from '../../../Coomponents/SectionTitle/SectionTitle';
import infoImg from '../../../assets/infobg.jpg'
import { Link } from 'react-router-dom';


const Info = () => {
    return (
        <div>
            <SectionTitle heading={'Budget Friendly'} subHeading={'Why should us'}></SectionTitle>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${infoImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    "Discover the world with 'Happy Travel'! People choose our agency for unforgettable adventures because we prioritize your budget. Our exclusive budget-friendly features ensure that you get the most out of your travels without breaking the bank. With handpicked deals, discounted packages, and personalized itineraries, we make your dream destinations accessible to all. We believe that extraordinary experiences should be affordable, and 'Happy Travel' is committed to turning your travel dreams into reality without emptying your wallet. Travel smart, travel happy with us!"
                </div>
            </div>

            <section className='mt-20'>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={infoImg} alt='' className="-mt-16  lg:block lg:w-1/2 rounded-lg shadow-2xl " />
                        <div>
                            <h4 className='text-lg text-primary font-semibold'>Appointment</h4>
                            <h1 className="text-4xl font-bold">Make Your Appointment With Your Best Services!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link className='btn btn-sm' to='/booking'>Get Start</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Info;