import React from "react";
import { Link } from "gatsby";

export default (props) => (
  <header>
    <h1>
        <Link to="/">Flishqa</Link>
    </h1>
    
    <h2>{props.headerText}</h2>
  </header>
);
