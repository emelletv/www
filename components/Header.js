import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const isActiveClassName = "decoration-blue-500 underline";
  return (
    <header className="relative py-6 leading-6 text-white sm:pt-8 sm:pb-20 bg-slate-800">
      <div className="text-white lg:px-8 sm:mx-auto sm:px-4">
        <div className="flex-wrap gap-y-6 items-end px-4 sm:flex sm:gap-x-8 md:gap-x-12 md:px-8">
          <Link href="/">
            <a className="flex-shrink-0 max-w-xs max-h-20 cursor-pointer lg:max-h-32 md:max-h-28">
              <img
                src="/logo.png"
                alt="EmelleTV"
                className="block max-w-xs h-auto max-h-20 align-middle lg:max-h-32 md:max-h-28"
              />
            </a>
          </Link>
          <hgroup className="flex-shrink-0">
            <nav className="hidden gap-x-8 text-xl font-bold leading-none sm:flex md:gap-x-12">
              <Link href="/">
                <a
                  className={`leading-5 ${
                    router.pathname == "/" ? isActiveClassName : ""
                  } opacity-100 cursor-pointer hover:underline hover:opacity-100`}
                  title="Home"
                >
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={`leading-5 ${
                    router.pathname == "/about" ? isActiveClassName : ""
                  } opacity-100 cursor-pointer hover:underline hover:opacity-100`}
                  title="About"
                  href="/about"
                >
                  About
                </a>
              </Link>
              <Link href="/subscribe">
                <a
                  className={`leading-5 ${
                    router.pathname == "/subscribe" ? isActiveClassName : ""
                  } opacity-100 cursor-pointer hover:underline hover:opacity-100`}
                  title="Subscribe"
                >
                  Subscribe and Support
                </a>
              </Link>
            </nav>
          </hgroup>
        </div>
      </div>
      <span className="absolute top-0 right-0 mt-6 mr-4 text-white cursor-pointer sm:hidden">
        <svg
          role="img"
          className="block w-6 h-6 align-middle"
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
        x-show="mobileNavOpen"
        className="hidden absolute top-0 right-0 mt-6 mr-4 text-white cursor-pointer sm:hidden"
        data-alpine-was-cloaked=""
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
    </header>
  );
};
