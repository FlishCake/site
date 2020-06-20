import React from "react";
import { Link } from "gatsby";

export default (props) => (
  <header class="flex">
    <Link class="item">
        <h1 to="/">Flishqa</h1>
    </Link>
    <p class="item">></p>
    <h2 class="item">{props.headerText}</h2>
  </header>
);
