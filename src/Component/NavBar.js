//React compotentenmoet geimporteerd worden, zodat het werkt. 

import React from "react";
import { Link } from "react-router-dom";

//Functie van de navigatiebar met path terug naar de homepagina
export default function NasaBar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">Return to Homepage</Link>
      </ul>
    </div>
  );
}
