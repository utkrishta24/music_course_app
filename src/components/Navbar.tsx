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
        <MenuItem setActive={setActive} active={active} item="My Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href={"/courses"}>All Projects</HoveredLink>
            <HoveredLink href={"/courses"}>Top Projects</HoveredLink>
            <HoveredLink href={"/courses"}>Personal Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Stream-it"
              href="https://algochurn.com"
              src="/https://github.com/utkrishta24/UI-Dark-Theme"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Scale Up"
              href="https://tailwindmasterkit.com"
              src="/#"
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
