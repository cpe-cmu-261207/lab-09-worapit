import React from "react";
import Hobbys from "../components/Hobbys";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

export default function () {
  return (
    <div>
      <div style={{ backgroundColor: "indianred" }}>
        <Navbar
          home="btn btn-outline-secondary"
          exp="btn btn-outline-light"
          contact="btn btn-outline-light"
          lap7="btn btn-outline-light"
        />
        <Profile />
        <Hobbys />
      </div>
    </div>
  );
}
