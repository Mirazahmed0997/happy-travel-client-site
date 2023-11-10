import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import swip1 from '../../../assets/swip1.jpeg'
import swip2 from '../../../assets/swip2.jpg'
import swip3 from '../../../assets/swip3.jpg'
import swip4 from '../../../assets/swip4.jpg'
import swip5 from '../../../assets/swip5.jpg'
import swip6 from '../../../assets/swip6.jpeg'
import SectionTitle from '../../../Coomponents/SectionTitle/SectionTitle';

const SwipeBanner = () => {
    return (
        <>
            <SectionTitle heading={'Most Popular'} subHeading={'Come out to Explore Bangladesh'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper m-16"
            >
                <SwiperSlide>
                    <img src={swip1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-12 text-orange-600 font-semibold">Bandarban</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-12 text-orange-600 font-semibold">Rangamati</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-12 text-orange-600 font-semibold">Sylhet</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-12 text-orange-600 font-semibold">Shundarban</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-12 text-orange-600 font-semibold">Saintmartin</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip6} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-12 text-orange-600 font-semibold">Dhaka</h3>
                </SwiperSlide>

            </Swiper>

        </>
    );
};

export default SwipeBanner;