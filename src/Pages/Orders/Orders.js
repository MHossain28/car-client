import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);

  //   set order state
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(`https://car-server-blue.vercel.app/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  //   DElete handle
  const hadleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://car-server-blue.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrder(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-3xl text-center my-6">
        Your Orders: {orders.length}
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Order Name</th>
              <th>message</th>
              <th>email</th>
              <th>DELET Order</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                hadleDelete={hadleDelete}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
