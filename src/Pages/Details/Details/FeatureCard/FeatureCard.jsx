import React from 'react';
import bgIMG from '../../../../assets/cardbg.jpg'

const FeatureCard = () => {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 bg:grid-cols-3 justify-items-center m-6 '>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={bgIMG} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Couple Pakages</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, porro!</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Check it out</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={bgIMG} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Family Pack!</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, quibusdam.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Check it out</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={bgIMG} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Student Packeges!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, saepe!</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Check it out</button>
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default FeatureCard;