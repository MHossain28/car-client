import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div>
      <div className="card w-96 mx-auto bg-base-100 shadow-xl my-6">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <p className="font-bold my-auto">Price:- {price}$</p>
            <Link
              to={`/cheackout/${_id}`}
              className="btn btn-outline btn-success text-white"
            >
              Buy Now <FaArrowRight className="w-6"></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
