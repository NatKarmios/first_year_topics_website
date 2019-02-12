import React from 'react';
import Page from "./Page";
import pages from "../content";

const Content = () => (
  <div id="content">
    <Page>
      <div id="title-box">
        <div id="title">
          {document.title}
        </div>
        <div id="subtitle">
          Thanks, Peter.
        </div>
      </div>
    </Page>
    {pages.map(page => page())}
  </div>
);

export default Content;