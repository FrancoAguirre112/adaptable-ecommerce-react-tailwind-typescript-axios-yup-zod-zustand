// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo, Search } from "@/components/index";

// import menuArrowRight from "../assets/icons/menuArrowRight.svg";

export default function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;

  // const handleClick = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const navLinks = [{ to: "/store", text: "Tienda" }];

  return (
    <>
      <header className="px-4 flex py-6 justify-between place-items-center border-b-[1px] gap-6 md:gap-16 md:px-24">
        {/* <div className=" flex justify-start lg:hidden">
          <button onClick={handleClick}>
            <img src={menuHamburger} alt="open menu" />
          </button>
        </div> */}

        <Logo />

        {/* <div className="hidden lg:flex justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex gap-8 text-lg font-semibold ${
                currentUrl.includes(link.to) ? "underline" : ""
              }`}
            >
              <h1>{link.text}</h1>
              <div className="flex justify-end"></div>
            </Link>
          ))}
        </div> */}

        <div className="justify-center relative w-full">
          <Search />
        </div>

        <div className="flex gap-1">
          <Link
            to={"/store"}
            className={` ${
              currentUrl.includes("store")
                ? `bg-main text-white`
                : "bg-gray-200 text-secondary"
            } p-2 rounded-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
              <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
            </svg>
          </Link>

          <Link
            to={"/cart"}
            className={` ${
              currentUrl.includes("cart")
                ? `bg-main text-white`
                : "bg-gray-200 text-secondary"
            } p-2 rounded-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </Link>
        </div>
      </header>

      {/* <Modal open={isMenuOpen} onClose={handleClick}>
        <div className="flex flex-col gap-4">
          <Search />
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="grid grid-cols-[80%_20%] text-xl font-bold"
              onClick={handleClick}
            >
              <h1>{link.text}</h1>
              <div className="flex justify-end">
                <img src={menuArrowRight} alt={link.to} />
              </div>
            </Link>
          ))}
        </div>
      </Modal> */}
    </>
  );
}
