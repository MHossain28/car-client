import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);

  //   set order state
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  return (
    <div>
      <h3 className="text-3xl text-center">Your Orders: {order.length}</h3>
    </div>
  );
};

export default Orders;
