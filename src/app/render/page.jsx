'use client'

import React from 'react';
import ListRenderer from "@/app/render/ListRenderer";
import Link from "next/link";

const Page = () => {
  const items = [
    {
      id: 1,
      name: "Apple"
    },
    {
      id: 2,
      name: "Orange"
    },
    {
      id: 3,
      name: "Cherry"
    }
  ]


  return (
    <div>
      <ListRenderer
        items={items}
        render={(item) => (
          <>
            <p>{item.id}. {item.name}</p>
          </>
          )}
      />
      <br />
      <Link href={"/"}>Back</Link>
    </div>
  );
};

export default Page;