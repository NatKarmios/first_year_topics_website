import React from 'react';

const Page = ({bg="rgba(255, 255, 255, 0.05)", children}) => (
  <div className="page" style={{ backgroundColor: bg }}>
    {children}
  </div>
);

export default Page;