import React from 'react';
import Features from '../Features/Features';
import FeatureCard from './FeatureCard/FeatureCard';
import Banner from '../../Home/Banner/Banner';
import SwipeBanner from '../../Home/Swiper/SwipeBanner';

const Details = () => {
    return (
        <div>
            <Banner></Banner>
            <SwipeBanner></SwipeBanner>
            <Features></Features>
            <FeatureCard></FeatureCard>
        </div>
    );
};

export default Details;