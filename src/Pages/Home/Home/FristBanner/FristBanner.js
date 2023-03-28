import React from "react";
import "./FristBanner.css";
import imgdd from "../../../../assets/images/banner/5.jpg";

const FristBanner = () => {
  return (
    <div className="text-white my-6 mb-16">
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/mechanic-holding-pair-wrenches-repair-garage_146671-19612.jpg?size=626&ext=jpg&ga=GA1.2.1847957643.1680023391&semt=ais")`,
        }}
      >
        <div className="text-center pt-16">
          <h1 className="text-4xl text-info">Car Repair & Services</h1>
          <img className="img" height={280} width={280} src={imgdd} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FristBanner;
