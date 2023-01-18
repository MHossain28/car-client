import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../../assets/icons/logoBrinedtow.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // Logout Handle
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="btn btn-ghost bg-white border-0 my-1" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost bg-white border-0 my-1" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost bg-white border-0 my-1" to="/about">
          About Us
        </Link>
      </li>
      <li>
        {user?.uid ? (
          <>
            <Link
              className="btn btn-ghost bg-white border-0 my-1"
              to="/dashboard"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogOut}
              className="btn btn-ghost bg-white border-0 my-1"
            >
              Logout
            </button>
          </>
        ) : (
          <Link className="btn btn-ghost bg-white border-0 my-1" to="/login">
            Login
          </Link>
        )}
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar h-20 mt-4 mb-4  bg-base-100">
      <div className="navbar-start">
        <Link className="   normal-case text-xl">
          <img height={50} width={70} src={logo1} alt="" />
        </Link>
      </div>

      <div className="navbar-end">
        <div className="dropdown ">
          <label
            tabIndex={0}
            className=" btn btn-outline btn-success lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 right-0 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <Link to="/services">
          <button className="btn btn-outline btn-success m-5 border-spacing-0 hidden lg:block">
            GET START
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
