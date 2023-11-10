import React from 'react';
import useCart from '../../../Hooks/useCart/UseCart';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart,refetch] = useCart();

    const handleDelete = row => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className='w-full'>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Destination</th>
                            <th>NID/Passport</th>
                            <th>Time</th>
                            <th>Days</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{row.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {row.Destination}
                                </td>
                                <td>{row.nid}</td>
                                <td>{row.slots}</td>
                                <td>{row.booking_Days}</td>
                                <td>{row.price}</td>
                               
                                <td>
                                    <button onClick={() => handleDelete(row)} className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;