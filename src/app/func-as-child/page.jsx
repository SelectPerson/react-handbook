'use client'

import React from 'react';
import Link from "next/link";
import FuncAsChildFilter from "@/app/func-as-child/FuncAsChildFilter";

const Page = () => {
  const data = [
    {
      id: 1,
      name: "BMW",
      cost: 32000
    },
    {
      id: 2,
      name: "Audi",
      cost: 26000
    },
    {
      id: 3,
      name: "Opel",
      cost: 14000
    }
  ]

  return (
    <div>
      <FuncAsChildFilter>
        {(filter) => (
          <ul>
            {data
              .filter(item => item.cost < filter)
              .map(item => (
                <li key={item.id}>
                  <h1>{item.name}</h1>
                  <p>{item.cost}</p>
                </li>
              ))}
          </ul>
        )}
      </FuncAsChildFilter>

      <Link href={"/"}>Back</Link>
    </div>
  );
};

export default Page;