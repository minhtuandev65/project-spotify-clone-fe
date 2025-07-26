import { handleLogout } from "@/utils/handle";
import { Link } from "react-router-dom";

export const getAvatarMenuItems = (navigate) => [
  {
    key: "1",
    label: (
      <Link className="!no-underline" to={"/my_account/info"}>
        Info User
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link className="!no-underline" to={"#"}>
        Create List
      </Link>
    ),
  },
  {
    key: "3",
    label: <span onClick={() => handleLogout(navigate)}>Log out</span>,
  },
];
