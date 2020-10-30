import React from "react";
import { Link } from "react-router-dom";

export default function NasaBar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">Homepage</Link>
      </ul>
      <ul>
        <Link className="link" to="/">Menu</Link>
      </ul>
      <ul>
        <Link className="link" to="/">Profile</Link>
      </ul>
    </div>
  );
}
