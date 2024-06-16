import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-yellow-400 p-4 py-2 flex justify-between items-center shadow-md">
      <div className="text-3xl text-black font-bold">WaT</div>
      <nav className="flex gap-8 pr-3">
        <Link
          href="/recipes
          "
          className="header-btn flex items-center justify-center"
        >
          Recipes
        </Link>
        <a
          href="/shopping-list"
          className="header-btn flex items-center justify-center"
        >
          Shop list
        </a>
        <a
          href="/my-favourites"
          className="header-btn flex items-center justify-center"
        >
          My favourites
        </a>
        <button className="header-btn flex items-center justify-center w-28 h-10 rounded-full bg-black text-white">
          Profile
        </button>
      </nav>
    </header>
  );
}
