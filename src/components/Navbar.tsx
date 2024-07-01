"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hide, setHide] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setHide(true);
      } else {
        setHide(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        `bg-transparent inset-x-0 max-w-2xl mx-auto z-50 fixed max-sm:w-[90%] max-sm:px-2 top-0 transition-transform   ${
          hide ? "-translate-y-[calc(100%+20px)]" : "translate-y-0"
        }`,
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          {" "}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/">
          {" "}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
