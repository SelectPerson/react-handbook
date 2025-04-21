import React from 'react';
import Compound from "@/app/compound/Compound";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Compound>
        <Compound.Item>
          Compound Item 1
        </Compound.Item>

        <Compound.Item>
          Compound Item 2
        </Compound.Item>
      </Compound>

      <Link href={"/"}>Back</Link>
    </div>
  );
};

export default Page;