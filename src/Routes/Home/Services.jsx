import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setService] = useState([]);
    const [sort, setSort] = useState('default');
    const [search, setSearch] = useState('');


    useEffect(() => {
        fetch(`https://react-car-doctor-server-five.vercel.app/services?sort=${sort}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [sort, search]);



    const handleSort = e => {
        const sortData = e.target.value;
        setSort(sortData)
    };


    const handleSearch = e => {
        e.preventDefault();
        const data = e.target.search.value;
        setSearch(data);
    }


    return (
        <div className="space-y-10">
            <div className="space-y-5">
                <h1 className="font-bold text-xl text-[#FF3811]">Service</h1>
                <h1 className="font-bold text-5xl text-[#151515]">Our Service Area</h1>
                <p className="text-[#737373] capitalize">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="flex justify-between items-center gap-10">
                <form onSubmit={handleSearch} className="border-2 border-green-600 rounded-lg flex justify-between items-center grow">
                    <input className="rounded-lg outline-0 px-5 py-2 w-full" type="text" name="search" id="" />
                    <input className="cursor-pointer px-5 py-2 font-semibold text-lg bg-green-600 text-white rounded-r-sm" type="submit" value="Search" />
                </form>
                <select onChange={handleSort} defaultValue='default' className="border border-black outline-0 p-3 rounded-md" name="sort" id="">
                    <option value="default" hidden>Default</option>
                    <option value="high-to-low">Price: High To Low</option>
                    <option value="low-to-high">Price: Low To High</option>
                </select>
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