import React from 'react';
import Banner from '../Banner/Banner';
import SwipeBanner from '../Swiper/SwipeBanner';
import Info from '../Info/Info';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SwipeBanner></SwipeBanner>
            <Info></Info>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;