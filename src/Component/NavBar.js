import React from "react";
import { Link } from "react-router-dom";

export default function NasaBar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">Return to Homepage</Link>
      </ul>
    </div>
  );
}
