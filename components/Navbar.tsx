"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#EDEDED]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="text-black flex justify-center gap-4">
            <Link className="hover:text-primary" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-primary" href={"/"}>
              Add Property
            </Link>
            <Link className="hover:text-primary" href={"/"}>
              Profile
            </Link>
          </div>
          <div className="flex flex-row text-center items-center  gap-4 text-black">
            <Link className="hover:text-primary " href={"/login"}>
              Login
            </Link>
            <button className="btn btn-outline text-black hover:bg-primary hover:text-white">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
