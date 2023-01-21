import React, { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CheackOut = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, price } = useLoaderData();
  const location = useNavigate();

  // Ordar Handle
  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    // send data for Database
    fetch("https://car-server-blue.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Seccessfully");
          location("/orders");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleOrder}>
        <h2 className="text-4xl my-2 mx-auto text-center font-bold">{title}</h2>
        <h4 className="text-center text-2xl">Price:- {price}$</h4>
        <hr className="my-4" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="email"
            placeholder="Your email"
            defaultValue={user?.email}
            readOnly
            className="input input-ghost w-full input-bordered"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Message"
        ></textarea>
        <input
          type="submit"
          className="btn btn-outline btn-accent mt-5  text-white"
          value="Ordar Now"
        />
      </form>
    </div>
  );
};

export default CheackOut;
