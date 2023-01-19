import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const current = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = `${
    monthNames[current.getMonth()]
  } ${current.getDate()} ${current.getFullYear()}`;

  return (
    <div className="flex flex-row justify-between items-center">
      <Link to="/PrevPage">◀ previos week</Link>
      <div>
        <Link to="/">
          <h1 className="flex justify-start">{date}</h1>
        </Link>
      </div>
      <Link to="/NextPage">next week ▶</Link>
    </div>
  );
};

export default Header;
