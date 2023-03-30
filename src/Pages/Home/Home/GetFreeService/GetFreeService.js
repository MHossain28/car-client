import React from "react";
import { Form } from "react-router-dom";

const GetFreeService = () => {
  return (
    <div>
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://kodesolution.com/html/2016/carfixing-html/demo/images/about/6.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Get A Free Service <span className="text-info">Now!</span>
            </h1>
            <hr />
            <Form className="my-6">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
                required
              />
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full "
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <input
                type="date"
                placeholder="Reservation Date"
                className="input input-bordered w-full "
                required
              />
              <button type="submit" className="btn  btn-outline btn-info my-2">
                Submit Now
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFreeService;
