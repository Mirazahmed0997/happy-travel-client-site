import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import SectionTitle from '../../Coomponents/SectionTitle/SectionTitle';
import DestinationModal from './Modal/DestinationModal';

const AvailableDestinations = ({ selectedDate, setSelectedDate }) => {
    const [bookingOptions, setBookingOptions] = useState([])
    useEffect(() => {
        fetch('https://happy-travel-server-l0nv7jkej-mirazahmed0997.vercel.app/destinations')
            .then(res => res.json())
            .then(data =>setBookingOptions(data))
        // console.log(bookingOptions)
    },)

        const handleSelect=event=>
        {
            event.preventDefault();
            const form=event.target;
            const destination= form.destinatons.value;
            console.log(destination)
        }

    return (
        <div>
            <div className='mt-6'>
                <SectionTitle heading={'Select Your Destination'} subHeading={'Scroll Down'}></SectionTitle>
            </div>


            <p className='text-center'>Selected Date : {format(selectedDate, 'PP')}</p>

            
            <div className='text-center my-6'>
                {
                    bookingOptions.map(bookingOption => <DestinationModal key={bookingOption.id} bookingOption={bookingOption} date={selectedDate}> </DestinationModal>
                    )
                }

                <div >
                
                    <label  htmlFor="my_modal_6" className="btn btn-primary ">Next To Book</label>

                </div>

            </div>
            {/* <DestinationModal></DestinationModal> */}

        </div>
    );
};

export default AvailableDestinations;