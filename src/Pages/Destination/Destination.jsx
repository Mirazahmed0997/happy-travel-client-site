import { DayPicker } from 'react-day-picker';
import booking from '../../assets/booking.jpg'
import { useState } from 'react';
import { format } from 'date-fns';


const Destination = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-3xl font-bold m-2">Choose Your Flexible Date</h1>
                        <img src={booking} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <div className='w-1/2 m-20'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;