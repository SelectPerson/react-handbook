import React from 'react';
import Link from "next/link";

const Slots = ({header, body}) => {
  return (
    <div>
      <div className="header">
        {header}
      </div>
      <div className="body">
        {body}
      </div>
    </div>
  );
};

export default Slots;