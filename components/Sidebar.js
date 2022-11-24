import constants from "../constants";
import { FaYoutube, FaTwitch, FaTwitter, FaPatreon } from "react-icons/fa";
import { Button } from "./Button";

export const Sidebar = () => (
  <aside className="hidden md:block order-2 pt-2 leading-6 text-gray-800">
    <div className="flex flex-col gap-2">
      <Button
        heading="Watch us live on"
        Icon={FaTwitch}
        text="Twitch"
        href={constants.twitch.url}
      />
      <Button
        heading="Watch past episodes on"
        Icon={FaYoutube}
        text="YouTube"
        href={constants.youtube.url}
      />
      <Button
        heading="Read us on"
        Icon={FaTwitter}
        text="Twitter"
        href={constants.twitter.url}
      />
      <Button
        heading="Support us on"
        Icon={FaPatreon}
        text="Patreon"
        href={constants.patreon.url}
      />
    </div>
  </aside>
);
