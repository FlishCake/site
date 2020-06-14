import React from "react";

import Header from "./header";
import Footer from "./footer";

export default ({ children }) => (
    <>
        <Header />
    
        <div>
            <Section>
                {children}
            </Section>
        </div>
    
        <Footer />
    </>
);
