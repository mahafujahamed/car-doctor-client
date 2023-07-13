import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-5">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>The majority suffered alteration in some form, by injected , or randomised <br /> words which do not look slightly beleivable</p>
            </div>
            <div>
               {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;