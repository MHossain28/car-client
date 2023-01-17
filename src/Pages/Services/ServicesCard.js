import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  return (
    <div>
      <div className="card w-96 mx-auto bg-base-100 shadow-xl my-6">
        <figure>
          <img src={service.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <p className="font-bold my-auto">Price:- {service.price}$</p>
            <button className="btn btn-outline btn-success text-white">
              Buy Now <FaArrowRight className="w-6"></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
