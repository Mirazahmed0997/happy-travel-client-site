import React from 'react';
import featuredimg from '../../../assets/featuredIMG.jpg'
import SectionTitle from '../../../Coomponents/SectionTitle/SectionTitle';
import './Features.css'
const Features = () => {
    return (
        <div className=' text-white bg-fixed font-semibold pt-8 '>
            <SectionTitle
                heading={'Featured Item'}
                subHeading={'Check it out'}
            ></SectionTitle>
            <div className='featured-item md:flex justify-center items-center py-20 px-36 pt-12 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    
                    <p className='uppercase'>
                         our Upcoming features
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod numquam reiciendis aspernatur accusamus vero minus sapiente eaque error commodi ratione! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id culpa doloribus aut, quos nulla expedita delectus eveniet perferendis nihil sunt!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-6">Try now</button>
                </div>
            </div>
        </div>
    );
};

export default Features;