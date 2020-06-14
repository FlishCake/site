import React from "react";

import Header from "./header";
import Footer from "./footer";

export default ({ children }) => (
  <>
    <Header />
    <Article>
        <Section>
            {children}
        </Section>
    </Article>
    <Footer />
  </>
);
