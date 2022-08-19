import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const SmallLogo = React.forwardRef(() => {
  return (
    <div className="flex justify-center items-center max-w-xs max-h-20 cursor-pointer lg:max-h-32 md:max-h-28">
      <Image
        src="/logo.png"
        alt="Logo"
        className="block max-w-xs h-auto max-h-20 align-middle lg:max-h-32 md:max-h-28"
        width="46"
        height="46"
      />
    </div>
  );
});

export const Header = () => {
  const router = useRouter();
  const isActiveClassName =
    "underline decoration-stale-100 hover:decoration-stale-100";
  const menu = `text-white text-xl cursor-pointer hover:underline underline-offset-2 hover:decoration-slate-400`;

  return (
    <header className="relative py-6 sm:pt-8 sm:pb-8 bg-slate-800">
      <div className="layout">
        <div className="flex items-center justify-between flex-wrap gap-y-6">
          <Link href="/">
            <SmallLogo />
          </Link>

          <hgroup className="flex-shrink-0">
            <nav className="hidden gap-x-8 sm:flex md:gap-x-12">
              <Link href="/">
                <div
                  title="Home"
                  className={
                    router.pathname === "/"
                      ? menu + " " + isActiveClassName
                      : menu
                  }
                >
                  Home
                </div>
              </Link>
              <Link href="/subscribe" passHref>
                <div
                  title="Subscribe"
                  className={
                    router.pathname == "/subscribe"
                      ? menu + " " + isActiveClassName
                      : menu
                  }
                >
                  Subscribe
                </div>
              </Link>
              <Link href="/about" passHref>
                <div
                  title="About"
                  className={
                    router.pathname == "/about"
                      ? menu + " " + isActiveClassName
                      : menu
                  }
                >
                  About
                </div>
              </Link>
            </nav>
          </hgroup>

          <span className="cursor-pointer sm:hidden">
            <svg
              role="img"
              className="block w-6 h-6 align-middle text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ fill: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
                className="cursor-pointer"
              />
            </svg>
          </span>
          <span
            className="hidden absolute top-0 right-0 mt-6 mr-4 text-white cursor-pointer sm:hidden"
            style={{ display: "none" }}
          >
            <svg
              role="img"
              className="block w-6 h-6 align-middle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              style={{ fill: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                className="cursor-pointer"
              />
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
};
