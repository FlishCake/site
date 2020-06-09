import React from "react";

import Header from "./header";
import Footer from "./footer";

export default ({ children }) => (
  <>
    <Header />
    <div style={{ margin: `0 auto`, maxWidth: 650, backgroundColor: `#eeeeee` }}>
      {children}
    </div>
    <Footer />
  </>
);
