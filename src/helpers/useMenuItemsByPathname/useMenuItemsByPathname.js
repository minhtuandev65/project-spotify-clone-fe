import { getSelectedKeyHome, menuItemsHome } from "../home/menuHome/menuHome";
import { getSelectedKeyMyAccount, menuItemsMyAccount } from "../infoUser/menuItemsMyAccount/menuItemsMyAccount";


export const getMenuItemsByPathname = (pathname = "") => {
  if (pathname.startsWith("/my_account")) return menuItemsMyAccount;
  if (pathname.startsWith("/")) return menuItemsHome;
  return [];
};

export const getSelectedKey = (pathname = "") => {
  if (pathname.startsWith("/my_account")) return getSelectedKeyMyAccount;
  if (pathname.startsWith("/home")) return getSelectedKeyHome;
  return [];
};
