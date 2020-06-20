import React from "react";
import { Link } from "gatsby";

export default (props) => (
  <header class="flex">
    <Link class="otherItem">
        <h1 to="/">Flishqa</h1>
    </Link>
    <p class="otherItem">></p>
    <h2 class="otherItem">{props.headerText}</h2>
  </header>
);
