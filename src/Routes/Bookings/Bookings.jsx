import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SecondNav from "../Shared/SecondNav";
import Footer from "../Shared/Footer";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, []);



    // Delete Booking Item.
    const handleDelete = (id) => {
        // console.log(id);

        // Call Delete API.
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
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Booking has been deleted Successfully.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(bk => bk._id !== id);
                            setBookings(remaining);
                        }
                    })
            }
        });

    };


    // Update Order Status Function.
    const updateOrderStatus = (value, id) => {
        const valueObject = { status: value };
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(valueObject)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated",
                        text: "Booking Status Updated Successfully.",
                        icon: "success"
                    });
                }
            })
    };


    return (
        <div className="max-w-7xl mx-auto px-2 text-center">
            <SecondNav />
            <div>
                {
                    bookings.map(booking => <div key={booking._id}>
                        <div className="flex items-center mb-10 gap-8">
                            <button onClick={() => handleDelete(booking._id)} title="Delete" className="btn btn-circle btn-outline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img className="w-40 h-28 rounded-xl" src={booking.img} alt="" />
                            <div className="text-start grow">
                                <h3 className="font-semibold text-xl">{booking.service_title}</h3>
                                <p className="text-[#A2A2A2] text-lg font-semibold">Name: {booking.customer_name}</p>
                                <p className="text-[#A2A2A2] text-lg font-semibold">ID: {booking.service_id}</p>
                            </div>
                            <h1 className="pr-28 font-semibold text-xl">${booking.service_price}</h1>
                            <h1 className="pr-28 font-semibold text-xl">{booking.service_date}</h1>
                            {/* <details className="dropdown bg-[#FF3811] rounded-xl">
                                <summary className="btn hover:bg-[#FF3811] border-0 rounded-xl m-1 bg-[#FF3811] text-white font-bold">{booking.status}<FaArrowDown /></summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </details> */}
                            <select onChange={(e) => updateOrderStatus(e.target.value, booking._id)} className='bg-[#FF3811] text-white font-semibold text-xl p-2 rounded-md text-center after:p-3' name="" id="">
                                <option value={booking.status} hidden>{booking.status}</option>
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancel">Cancel</option>
                            </select>
                            {/* <button className="bg-[#FF3811] text-white font-semibold text-xl px-6 py-3 rounded-lg">{booking.status}</button> */}
                        </div>
                    </div>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Bookings;