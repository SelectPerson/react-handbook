import React from 'react';

const ProxyComponent = ({ children, isActive }) => {
  return (
    <div>
      {isActive && children }
    </div>
  );
};

export default ProxyComponent;