"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="My Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href={"/courses"}>All Courses</HoveredLink>
            <HoveredLink href={"/courses"}>Top Courses</HoveredLink>
            <HoveredLink href={"/courses"}>Personal Courses</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Guitar"
              href="/"
              src="/"
              description="Prepare for music interviews like never before."
            />
            <ProductItem
              title="Music Theory"
              href="/"
              src="/"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Me"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
