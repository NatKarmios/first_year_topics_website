import React from 'react';
import Page from "./Page";
import pages from "../content";

const Content = () => (
  <div id="content">
    <Page>
      testerino
    </Page>
    {pages.map(page => page())}
  </div>
);

export default Content;