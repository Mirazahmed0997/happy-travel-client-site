import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Coomponents/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://happy-travel-server-laj0900sh-mirazahmed0997.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='m-6'>
            <SectionTitle

                subHeading={`What's customers saying about us`}
                heading={'Testimonials'}
            >
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id} review={review}>
                        <div className='flex flex-col items-center my-16 mx-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>

                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Reviews;