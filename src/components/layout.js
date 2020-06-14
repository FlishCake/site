import React from "react";

import Header from "./header";
import Footer from "./footer";

export default (props, { children }) => (
    <>
        <Header headerText="props.headerText" />
    
        <div>
            {children}
        </div>
    
        <Footer />
    </>
);
