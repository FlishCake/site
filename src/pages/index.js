import React from "react";

import Layout from "../components/layout";

const Title = "Главная";

const Content = props => (
    <h1>Test</h1>
);

export default () => (
  <Layout headerText={Title} content={Content} />
);
