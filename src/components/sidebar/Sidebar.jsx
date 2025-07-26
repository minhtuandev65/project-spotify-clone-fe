import {
  getMenuItemsByPathname,
  getSelectedKey,
} from "@/helpers/useMenuItemsByPathname/useMenuItemsByPathname";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useLocation } from "react-router";

function Sidebar({ collapsed }) {
  const location = useLocation();
  const pathname = location.pathname;
  const selectedKey = getSelectedKey(pathname);
  const currentMenuItems = getMenuItemsByPathname(pathname);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="custom-sider"
    >
      <Menu
        className="custom-menu"
        theme="light"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={currentMenuItems}
      />
    </Sider>
  );
}

export default Sidebar;
