import { Link } from "react-router-dom";
import { homeIcons } from "../icon/iconHome";

const defaultPath = "/";

export const menuItemsHome = [
  {
    key: "1",
    icon: homeIcons.new,
    label: (
      <Link className="!no-underline" to={`${defaultPath}`}>
        New
      </Link>
    ),
  },
  {
    key: "2",
    icon: homeIcons.trend,
    label: (
      <Link className="!no-underline" to={`${defaultPath}trend`}>
        Trend
      </Link>
    ),
  },
  {
    key: "3",
    icon: homeIcons.popular,
    label: (
      <Link className="!no-underline" to={`${defaultPath}popular`}>
        Popular
      </Link>
    ),
  },
  {
    key: "4",
    icon: homeIcons.artist,
    label: (
      <Link className="!no-underline" to={`${defaultPath}artist`}>
        Popular Artist
      </Link>
    ),
  },
  {
    key: "5",
    icon: homeIcons.international,
    label: (
      <Link className="!no-underline" to={`${defaultPath}international`}>
        International Music
      </Link>
    ),
  },
  {
    key: "6",
    icon: homeIcons.likeSong,
    label: (
      <Link className="!no-underline" to={`${defaultPath}like`}>
        Like Song
      </Link>
    ),
  },
];

export const getSelectedKeyHome = (pathname) => {
  if (pathname.startsWith(`${defaultPath}trend`)) return "2";
  if (pathname.startsWith(`${defaultPath}`)) return "1";
  if (pathname.startsWith(`${defaultPath}radio`)) return "3";
  if (pathname.startsWith(`${defaultPath}artist`)) return "4";
  if (pathname.startsWith(`${defaultPath}korea`)) return "5";
  if (pathname.startsWith(`${defaultPath}japan`)) return "6";
  if (pathname.startsWith(`${defaultPath}vietnamese`)) return "7";
  if (pathname.startsWith(`${defaultPath}chinese`)) return "8";
  if (pathname.startsWith(`${defaultPath}like`)) return "9";
  return "";
};
