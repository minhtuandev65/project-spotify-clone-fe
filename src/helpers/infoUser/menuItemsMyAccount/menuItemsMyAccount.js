// menuItems.js
import { Link } from "react-router-dom";
import { myAccountIcons } from "./icon/iconMyAccount";

const defaultPath = "/my_account";

export const menuItemsMyAccount = [
  {
    key: "1",
    icon: myAccountIcons.infoUser,
    label: (
      <Link className="!no-underline" to={`${defaultPath}/info_user`}>
        Info user
      </Link>
    ),
  },
  {
    key: "2",
    icon: myAccountIcons.uploadSong,
    label: (
      <Link className="!no-underline" to={`#`}>
        Upload Your Song
      </Link>
    ),
  },
  {
    key: "3",
    icon: myAccountIcons.listSong,
    label: (
      <Link className="!no-underline" to={`#`}>
        Your List Song
      </Link>
    ),
  },
];

export const getSelectedKeyMyAccount = (pathname) => {
  if (pathname.startsWith(`${defaultPath}/list`)) return "2";
  if (pathname.startsWith(`${defaultPath}/info_user`)) return "1";
  if (pathname.startsWith(`${defaultPath}/upload`)) return "3";
  return "";
};
