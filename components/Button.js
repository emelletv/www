export const Button = ({
  backgroundColor = "transparent",
  color = "text-gray-800",
  href,
  text,
  Icon,
  heading,
}) => {
  return (
    <a
      href={href}
      className={
        "flex items-center gap-2 py-2 pr-4 pl-4 leading-6 no-underline whitespace-nowrap rounded-md transition cursor-pointer box-border " +
        color +
        " " +
        backgroundColor
      }
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className={
          "block flex-shrink-0 w-auto h-8 p-1 align-middle cursor-pointer"
        }
      />
      <label className="flex-shrink-0 cursor-pointer">
        <span className="block text-2xs font-medium leading-none mb-1 text-gray-400 uppercase">
          {heading}
        </span>
        <b className="block mt-px text-base font-bold leading-none">{text}</b>
      </label>
    </a>
  );
};
