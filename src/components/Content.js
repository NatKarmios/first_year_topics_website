import React from 'react';
import Page from "./Page";
import pages from "../content";

const Content = () => (
  <div id="content">
    <Page bg="rgba(0, 0, 0, 0)">
      <div id="title-box">
        <div id="title">
          {document.title}
        </div>
        <div id="subtitle">
          using variational autoencoders
        </div>
        <div style={{marginTop: '20px'}}>
          by Shuaifeng Zhi
        </div>
      </div>
    </Page>
    {pages.map((page, i) => page({key: i}))}
  </div>
);

export default Content;