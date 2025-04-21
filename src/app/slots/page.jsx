import React from 'react';
import Slots from "@/app/slots/Slots";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Slots
        header={<h1>Header</h1>}
        body={<p>Body</p>}
      />

      <Link href={'/'}>Back</Link>
    </div>
  );
};

export default Page;