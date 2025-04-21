import React from 'react';

const Compound = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Compound.Item = ({ children }) => {
  return (
    <h1>
      {children}
    </h1>
  )
}

Compound.Item.displayName = "CompoundItem";

export default Compound;