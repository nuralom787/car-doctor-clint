import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Service = ({ service }) => {

    const { _id, title, img, price } = service;


    return (
        <div className="text-start border border-black p-6 rounded-lg">
            <img className="h-60 w-full rounded-lg mb-4" src={img} alt="" />
            <div className="space-y-4">
                <h1 className="font-bold text-2xl text-[#444444]">{title}</h1>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-xl text-[#FF3811]">Price: ${price}</p>
                    <Link to={`/details/service/${title}/${_id}`}>
                        <FaArrowRight className="font-bold text-xl text-[#FF3811]" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;