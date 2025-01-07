import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const Details = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    const { _id, title } = service;


    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, []);

    return (
        <div>
            <p>Service Details For ID NO: {id}</p>
            <Link className="btn btn-outline" to={`/checkout/service/${title}/${id}`}>Checkout</Link>
        </div>
    );
};

export default Details;