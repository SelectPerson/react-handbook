'use client'

import React, {useState} from 'react';
import Link from "next/link";
import ProxyComponent from "@/app/proxy-component/ProxyComponent";

const Page = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button onClick={() => setIsActive($ => !$)}>Toggle</button>

      <ProxyComponent isActive={isActive}>
        Proxy
      </ProxyComponent>


      <Link href={"/"}>Back</Link>
    </div>
  );
};

export default Page;