import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="my-12">
      <h1 className="text-3xl text-center "> Admin Site </h1>
      <hr />
      <div className="drawer-side">
        <label className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          <li>
            <Link className="btn btn-outline btn-primary">Our Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
