import React, { useEffect, useState } from "react";

const OrderRow = ({ order, hadleDelete }) => {
  const { _id, serviceName, phone, customer, price, message, email, service } =
    order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`https://car-server-blue.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{price} $</span>
      </td>
      <td>{message}</td>
      <td>{email}</td>
      {/* detete btn  */}
      <td>
        <button
          onClick={() => hadleDelete(_id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
