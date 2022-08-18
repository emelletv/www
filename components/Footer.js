import constants from "../constants";

export const Footer = () => (
  <footer
    className="w-full layout py-8 mt-8 leading-6 text-gray-600 border-b-0 border-t-2 border-gray-200 border-solid"
    style={{ borderWidth: 0 }}
  >
    <div className="flex flex-wrap text-gray-600 sm:gap-x-10 md:flex-nowrap">
      <div className="order-2 md:order-1 md:w-1/2">
        <nav
          className="flex flex-wrap items-center mb-8 sm:mt-2 sm:gap-x-5"
          style={{ gap: "0.75rem 0.875rem" }}
        >
          <a
            href={"mailto:" + constants.mail}
            className="flex items-center w-6 h-6 text-gray-500 transition cursor-pointer"
            title="Email Us"
          >
            <svg
              role="img"
              className="block w-6 h-auto align-middle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              style={{ fill: "currentcolor" }}
            >
              <path
                d="M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.63 419.4 32 384 32zM384 336c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V225.9l138.5 69.27C209.3 298.5 216.6 300.2 224 300.2s14.75-1.688 21.47-5.047L384 225.9V336zM384 190.1l-152.8 76.42c-4.5 2.25-9.812 2.25-14.31 0L64 190.1V176c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32V190.1z"
                className="text-gray-700"
              />
            </svg>
          </a>
          <a
            href={constants.twitter}
            className="flex items-center w-6 h-6 text-gray-500 transition cursor-pointer"
            target="_twitter"
            title="View EmelleTV on Twitter"
          >
            <svg
              role="img"
              className="block w-6 h-auto align-middle"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "currentcolor" }}
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                className="text-gray-700"
              />
            </svg>
          </a>
        </nav>
        <section className="leading-loose">
          <span className="block mt-4 leading-8">© 2022 EmelleTV</span>
        </section>
      </div>
      <div className="order-1 mb-10 w-full sm:w-3/4 md:order-2 md:mb-0 md:w-1/2"></div>
    </div>
  </footer>
);
