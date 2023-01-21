import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  //   Card data Loade
  useEffect(() => {
    fetch("https://car-server-blue.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold ">OUR SERVICES AREA</h1>

        <p className="text-center font-semibold w-3/4 mx-auto my-3">
          The original producer of a vehicle's components, and so OEM car parts
          are identical to the parts used in producing a vehicle.
        </p>
        <hr />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center mx-auto my-12">
          {services.map((service) => (
            <ServicesCard key={service.id} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
