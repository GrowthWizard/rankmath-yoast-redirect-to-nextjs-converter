import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState("hidden");

  const openNavigationMenu = () => {
    setIsOpen(isOpen === "hidden" ? "active" : "hidden");
  };

  return (
    <div className="bg-dark">
      <header className="max-w-7xl mx-auto py-2 px-5">
        <nav
          id="navigation"
          className="flex flex-wrap justify-between items-center md:mx-auto"
        >
          <div id="logo">
            <Link
              href="/"
              className="ease-linear transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/logo.png"
                alt="wp-to-next-logo"
                width={160}
                height={70}
                quality={100}
                loading="eager"
              />
            </Link>
          </div>
          <button
            onClick={openNavigationMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700"
            aria-controls="navbar-default"
            aria-expanded={isOpen === "hidden" ? "false" : "true"}
          >
            <span className="sr-only">
              {isOpen === "hidden" ? "Menü öffnen" : "Menü schließen"}
            </span>
            <div
              className="flex flex-col justify-between w-8 h-5 rounded-lg p-0.5"
              aria-hidden="true"
            >
              <span id="bar" className="h-0.5 w-full bg-black"></span>
              <span id="bar" className="h-0.5 w-full bg-black"></span>
              <span id="bar" className="h-0.5 w-full bg-black"></span>
            </div>
          </button>
          <div
            id="navbar-default"
            className={`${isOpen} w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col p-4 gap-2 text-white border-gray-100 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  href="/howtouse"
                  className="ease-linear transition-opacity hover:opacity-80"
                >
                  How to use
                </Link>
              </li>
              <li>
                <a
                  className="ease-linear transition-opacity hover:opacity-80"
                  href="https://github.com/GrowthWizard/rankmath-yoast-redirect-to-nextjs-converter"
                  title="Check Code on Github"
                >
                  Check out on GitHub
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
