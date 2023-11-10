import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../ContextProvider/AuthProvider';

const DestinationModal = ({date,bookingOption}) => {
    const {slots,name,Hotels,price}=bookingOption
    const navigate = useNavigate();
    const {user}=useContext(AuthContext)

    // const{}=destination;
    const handleBooking = event => {
        event.preventDefault();
        const form=event.target;
        const destination=form.destination.value
        const slots=form.slots.value
        const name=form.name.value
        const contact=form.contact.value
        const email=form.email.value
        const hotel=form.hotels.value
        const days=form.days.value
        const price=1500*days
        const nid=form.nid.value
        const booking={
            appointmentDate:date,
            Destination:destination,
            name: name,
            booking_Days:days,
            slots,
            email,
            contact,
            hotel,
            price,
            nid
        }

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })


        Swal.fire({
            title: 'Booking Confirmed',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
        form.reset();
        navigate('/')
        
    }
    return (

        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle " />
            <div className="modal ">
                <div className="modal-box relative bg-white">
                    <h3 className="font-bold text-lg">Book Here</h3>
                    <div className="modal-action">
                        <form onSubmit={handleBooking} className=' mt-10'>
                            <input type="text" name='date' readOnly value={date} className="input input-bordered bg-white w-full m-2" ></input>

                            <p className='text-start m-2'>*Select Your Destination</p>
                            <select name='destination' className="select select-bordered w-full">
                                {
                                    name.map((n, i) => <option value={n} key={i}> {n}</option>)
                                }
                            </select>  

                            <p className='text-start m-2'>*Select Journey Time</p>
                            <select name='slots' className="select select-bordered w-full">
                                {
                                    slots.map((slot, i) => <option value={slot} key={i}> {slot}</option>)
                                }
                            </select>                        
                           
                            <p className='text-start m-2'>*Select Hotels</p>
                            <select name='hotels' className="select select-bordered w-full">
                                {
                                    Hotels.map((hotel, i) => <option value={hotel} key={i}> {hotel}</option>)
                                }
                            </select> 

                            <input type="text" name='days'  placeholder='How many days ?' className="input input-bordered bg-white w-full m-2" ></input> 

                            <input type="text" name='price' readOnly  placeholder='Cost : 1500/Day' className="input input-bordered bg-white w-full m-2" ></input>                       
                                                  
                            
                            <input type="text"  name='name'  placeholder="name" className="input input-bordered bg-white w-full m-2 " required ></input>

                            <input type="number" name='contact' placeholder="contact" className="input input-bordered bg-white w-full m-2" required ></input>

                            <input type="text" name='nid' placeholder="NID/Passport/Driving License no." className="input input-bordered bg-white w-full m-2" required ></input>

                            <input type="email"  name='email' value={user.email} readOnly  placeholder="Email" className="input input-bordered bg-white w-full m-2" ></input>
                            <br />
                            <textarea className="textarea textarea-accent" name placeholder="Feel free To Ask"></textarea>
                            <p className='text-center mb-2 '><small className='text-red-500' >Scroll up To Close OR</small></p>
                            <input className='btn btn-accent w-full m-2' type="submit" value="Submit" ></input>
                            
                        </form>
                        <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 m-4 font-bold m-2">Close</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DestinationModal;