"use client";
import { useState } from "react";
import Link from "next/link";
import { orbitron } from "../fonts";
import { useCookies } from "react-cookie";
import { usePathname } from "next/navigation";
export default function NavigatorBar({ animation }) {
  const [cookies, setCookie] = useCookies(["animation"]);
  const path = usePathname();

  const links = [
    { link: "/", name: "Inicio" },
    { link: "/juegos", name: "Juegos" },
    { link: "/creditos", name: "Creditos" },
  ];

  return (
    <nav
      className={`${
        orbitron.className
      } text-[#00ffcc] fixed top-0 left-0 xl:py-5 bg-black w-full flex py-2 xl:justify-center text-lg mb-4
       items-center z-50 ${
         animation
           ? ""
           : "md:animate-fade md:animate-duration-100 md:animate-ease-linear md:animate-delay-[4500ms]"
       } `}
      onAnimationEnd={(e) => {  
          setCookie("animation", true);
      }}
    >
      <NavigationLineAnimation />
      <NavigationResponsive links={links} />
    </nav>
  );

  function NavigationLink({ link, name, onClick }) {
    return (
      <li className={`py-2 xl:py-0 xl:hover:border-[#00ffcc] xl:hover:cursor-pointer xl:border-b-4 ${path === link ? 'xl:border-[#00ffcc]' : 'xl:border-transparent'} xl:transition-colors xl:duration-300 xl:ease-in`}>
        <Link
          href={link}
          style={{
            textShadow: ["0px 0px 5px rgba(0,255,204,0.5)"],
          }}
          onClick={onClick}
        >
          {name}
        </Link>
      </li>
    );
  }

  function NavigationMenu({ className = "", links, onClick }) {
    return (
      <>
        <ul
          className={`${className} text-lg md:text-2xl z-40 absolute top-full left-0 py-5 px-2 backdrop-filter backdrop-blur-3xl list-none no-underline animate-duration-75 animate-fade-down`}
          onAnimationEnd={(e) => e.stopPropagation()}
        >
          {links.map((link) => (
            <NavigationLink key={link.link} {...link} onClick={onClick} />
          ))}
        </ul>
      </>
    );
  }
  function NavigationResponsive({ links }) {
    const [isMenu, setIsMenu] = useState(false);
    const onClick = (e) => {
      setIsMenu(!isMenu);
    };
    return (
      <>
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
        <NavigationMenu
          links={links}
          className={
            "xl:relative xl:bg-transparent xl:items-center  xl:flex hidden xl:py-0  xl:z-30 xl:text-xl xl:gap-20 xl:list-none"
          }
        ></NavigationMenu>
        {isMenu && <NavigationMenu links={links} onClick={onClick} className="xl:hidden" />}
      </>
    );
  }

  function NavigationLineAnimation() {
    return (
      <div className="absolute md:block hidden top-0 left-0 w-full h-full">
        <div
          className={`relative animate-none ${
            animation ? "md:animate-move2" : "md:animate-move" 
          } top-0 left-0 w-48 h-full`}
          style={{
            boxShadow: [
              "20px 0px 0px #000",
              "-20px 0px 0px rgba(0,0,0,1)",
              "0px 0px 20px 1px #ff3399",
            ],
          }}
        ></div>
      </div>
    );
  }
}
