import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img ">
        <img src={image} className="  rounded-2xl " accessKey="" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-outline btn-accent btn-circle mr-5"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-outline btn-accent btn-circle"
        >
          ❯
        </a>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 left-5 top-1/4 text-white">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          Affordable Price for <br /> Car Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-2/4 w-2/5 text-white">
        <p className="">
          Lorem ipsum dolor sit amet dolor sit amet consectetur, adipisicing
          adipisci. Excepturi. Lorem ipsum dolor sit ame
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5  top-3/4 w-2/5 text-white">
        <p className="">
          <Link to="/services" className="btn btn-accent mr-3 text-white">
            Our SERVICR
          </Link>
          <Link to="/about" className="btn btn-outline btn-accent mt-2">
            About Us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BannerItem;
