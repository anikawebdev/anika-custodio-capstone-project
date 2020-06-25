import React from "react";
import { Link } from "react-router-dom";

function Overview() {
  let currentDate = new Date();
  console.log(currentDate);

  let currentTime = new Date(currentDate.getTime());
  console.log(currentTime);

  currentTime.setMonth(currentDate.getMonth() + 1);
  currentTime.setDate(0);

  let remainingDays =
    currentTime.getDate() > currentDate.getDate()
      ? currentTime.getDate() - currentDate.getDate()
      : 0;

  console.log(remainingDays);

  return (
    <div className="overview">
      <h2>funds available</h2>
      <span>{remainingDays} day/s left until the end of the month</span>

      <Link to="/details">
        <button className="button--big">review transactions</button>
      </Link>
    </div>
  );
}

export default Overview;
