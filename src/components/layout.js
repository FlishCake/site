import React from "react";

import Header from "./header";
import Footer from "./footer";

export default (props) => (
    <>
        <Header headerText={props.headerText} />
    
        <div class="content">
            {props.Content}
        </div>
    
        <Footer />
    </>
);
