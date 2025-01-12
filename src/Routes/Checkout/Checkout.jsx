import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [service, setService] = useState({});

    const { _id, title, price, service_id, img } = service;

    // Load Initial Service Data For Checkout.
    useEffect(() => {
        fetch(`https://react-car-doctor-server-five.vercel.app/checkout/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, []);


    // Store Checkout Data.
    const handleCheckout = e => {
        e.preventDefault();

        const formData = e.target;
        const name = formData.name.value;
        const date = formData.date.value;
        const email = formData.email.value;
        const price = formData.price.value;
        const message = formData.message.value;

        const checkOutData = { name, date, email, price, message };

        const bookingService = {
            customer_name: name,
            customer_email: email,
            customer_message: message,
            service_date: date,
            service_price: price,
            service_title: title,
            img,
            service_id,
            status: "pending"
        };

        // Post Data.
        fetch("https://react-car-doctor-server-five.vercel.app/bookings", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Services Added Successfully",
                        icon: "success",
                        confirmButtonText: "OK"
                    }).then(result => {
                        if (result.isConfirmed) {
                            navigate("/");
                        }
                    })
                }
            })
    };


    return (
        <div className="max-w-5xl mx-auto bg-gray-300 my-12 text-center px-6 py-10 md:p-20 rounded-md space-y-6">
            <form onSubmit={handleCheckout} className="">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter First Name" className="px-5 py-3 mt-2 rounded-md outline-0" required defaultValue={user?.displayName} />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Date</span>
                        </label>
                        <input type="date" name="date" id="" placeholder="Enter Last Name" className="px-5 py-3 mt-2 rounded-md outline-0" required />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="px-5 py-3 mt-2 rounded-md outline-0" required defaultValue={user?.email} disabled />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Due Amount</span>
                        </label>
                        <input type="number" name="price" placeholder="Enter Your Phone" className="px-5 py-3 mt-2 rounded-md outline-0" required defaultValue={price} disabled />
                    </div>
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Your Message</span>
                    </label>
                    <textarea rows={6} name="message" id="" placeholder="Enter Your Message" className="px-5 py-3 mt-2 rounded-md outline-0" required ></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="bg-white hover:bg-[#FF3811] text-[#FF3811] hover:text-white border border-[#FF3811] font-bold py-4 rounded-md cursor-pointer duration-500" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;