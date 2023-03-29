import React from "react";

const SocendBanner = () => {
  return (
    <div className="hero mb-8">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://kodesolution.com/html/2016/carfixing-html/demo/images/about/1.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">
            Carfix - Car repair & Car Wash Services
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            recusandae voluptas, voluptatem. Maxime, quo laudantium consequatur.
            Suscipit quam, excepturi. Aperiam quaerat rem ea odit! Dicta,
            voluptatem, quidem magnam est quibusdam hic et possimus sequi. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit
            ea quibusdam, perspiciatis ad. Dolorum at laboriosam vel ad quis
            consequatur totam excepturi quas nesciunt repellendus.
          </p>
          <button className="btn btn-info text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default SocendBanner;
