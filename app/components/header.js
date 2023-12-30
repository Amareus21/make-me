"use client";
import { useState } from "react";
import Link from "next/link";
import { orbitron } from "../fonts";
export default function Menu() {
  const [isMenu, setIsMenu] = useState(false);
  const onClick = () => {
    setIsMenu(!isMenu);
  };
  return (
    <nav
      className={`${orbitron.className} text-[#00ffcc] fixed top-0 left-0 xl:py-5 bg-transparent w-full flex py-2 xl:justify-center text-lg mb-4
       items-center z-40 animate-fade animate-duration-[300ms] animate-ease-linear animate-delay-[4500ms] `}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        
      >
        <div className="relative animate-move top-0 left-0 w-48 h-full z-10 "
        style={{
          boxShadow: [
            "20px 0px 0px #000",
            "-20px 0px 0px rgba(0,0,0,1)",
            "0px 0px 20px 1px #ff3399",
          ],
        }}>

        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-sm z-20 shadow-[0px_0px_20px_1px_rgba(255,255,255,0.4)]"></div>
      <ul className="relative z-30 text-xl hidden gap-20 list-none no-underline items-center  xl:flex">
        <li className="hover:border-[#00ffcc] hover:cursor-pointer border-b-4 border-transparent transition-colors duration-300 ease-in ">
          <Link
            href="/"
            scroll={true}
            style={{
              textShadow: ["0px 0px 5px rgba(0,255,204,0.5)"],
            }}
          >
            Inicio
          </Link>
        </li>
        <li className="hover:border-[#00ffcc] hover:cursor-pointer border-b-4 border-transparent transition-colors duration-300 ease-in ">
          <Link
            href="/juegos"
            scroll={true}
            style={{
              textShadow: ["0px 0px 5px rgba(0,255,204,0.5)"],
            }}
          >
            Juegos
          </Link>
        </li>
      </ul>
      <div className="relative xl:hidden z-30 px-4">
        <div onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 md:w-10 md:h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>
      {isMenu && (
        <div className="xl:hidden text-lg md:text-2xl z-10 absolute top-full left-0 py-5 px-2 backdrop-filter backdrop-blur-sm bg-[#2e4d1e] bg-opacity-10">
          <ul>
            <li className="py-2">
              <Link href="/" className="bg-clip-text" onClick={onClick}>
                Inicio
              </Link>
            </li>
            <li className="py-2">
              <Link href="/juegos" className="bg-clip-text" onClick={onClick}>
                Juegos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
