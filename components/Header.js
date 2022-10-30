import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const clx = (classNames) => {
  return Object.keys(classNames)
    .filter((name) => classNames[name])
    .join(" ");
};

const SmallLogo = () => {
  return (
    <div className="flex justify-center items-center max-w-xs max-h-20 cursor-pointer lg:max-h-32 md:max-h-28">
      <img
        src="/logo.png"
        alt="Logo"
        className="block max-w-xs h-auto max-h-20 align-middle lg:max-h-32 md:max-h-28"
        width="46"
        height="46"
      />
    </div>
  );
};

const menuData = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  /* { href: "/sponsor", title: "Sponsor" }, */
];

export const Header = () => {
  const router = useRouter();
  const isActiveClassName =
    "underline decoration-stale-100 hover:decoration-stale-100";
  const menu = `text-white text-xl cursor-pointer hover:underline underline-offset-2 hover:decoration-slate-400`;
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <header className="relative py-6 sm:pt-8 sm:pb-8 bg-slate-800">
      <div className="layout">
        <div className="flex items-center justify-between flex-wrap gap-y-6">
          <Link href="/" passHref>
            <SmallLogo />
          </Link>

          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={clx({
              "w-full md:block md:w-auto": true,
              hidden: !isNavOpen,
              block: isNavOpen,
            })}
          >
            <ul className="flex text-center flex-col gap-5 p-4 md:p-0 mt-4  rounded-lg border border-slate-600 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              {menuData.map(({ href, title }) => (
                <li key={href}>
                  <Link href={href} passHref>
                    <div
                      title={title}
                      className={
                        router?.pathname === href
                          ? menu + " " + isActiveClassName
                          : menu
                      }
                    >
                      {title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
