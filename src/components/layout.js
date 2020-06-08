import React from "react";

import Header from "./header";

export default ({ children }) => (
  <>
    <Header />
    <div style={{ margin: `0 auto`, maxWidth: 650, backgroundColor: `#eeeeee` }}>
      {children}
    </div>
  </>
);
