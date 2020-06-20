import React from "react";
import { Link } from "gatsby";

export default (props) => (
  <header class="flex">
    <h1 class="otherItem">
        <Link to="/">Flishqa</Link>
    </h1>
    
    <h2 class="otherItem">{props.headerText}</h2>
  </header>
);
