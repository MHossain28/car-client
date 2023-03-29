import React from "react";
import Services from "../../Services/Services";
import FristBanner from "./FristBanner/FristBanner";
import GetFreeService from "./GetFreeService/GetFreeService";
import SocendBanner from "./SocendBanner/SocendBanner";

const Home = () => {
  return (
    <div>
      <FristBanner></FristBanner>
      <SocendBanner></SocendBanner>
      <GetFreeService></GetFreeService>
      <Services></Services>
    </div>
  );
};

export default Home;
