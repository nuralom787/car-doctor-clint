import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setService] = useState([]);


    useEffect(() => {
        fetch("https://react-car-doctor-server-five.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, []);




    return (
        <div className="space-y-10">
            <div className="space-y-5">
                <h1 className="font-bold text-xl text-[#FF3811]">Service</h1>
                <h1 className="font-bold text-5xl text-[#151515]">Our Service Area</h1>
                <p className="text-[#737373] capitalize">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <button className="font-semibold text-lg hover:bg-[#FF3811] text-[#FF3811] hover:text-white border border-[#FF3811] px-6 py-3 rounded-lg duration-500">
                More Services
            </button>
        </div>
    );
};

export default Services;