import React, { useState } from 'react';
import Destination from '../../Destination/Destination';
import AvailableDestinations from '../../DestinationsOption/AvailableDestinations';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <Destination selectedDate={selectedDate} setSelectedDate={setSelectedDate}></Destination>
            <AvailableDestinations selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AvailableDestinations>
        </div>
    );
};

export default Booking;