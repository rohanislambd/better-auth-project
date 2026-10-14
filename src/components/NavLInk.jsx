"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLInk = ({ categories }) => {
  const pathname = usePathname();
  const isActive = pathname === `/category/${categories.slug}`;
  // console.log(categories);
  return (
    <Link
      href={`/category/${categories.slug}`}
      className={`flex gap-1 ${isActive ? " text-blue-500" : ""}`}
    >
      <span>{categories.icon}</span>
      <li>{categories.name}</li>
    </Link>
  );
};

export default NavLInk;
