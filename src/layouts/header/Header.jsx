import { Avatar, Button, Dropdown, Input, Layout, Typography } from "antd";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CloseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";

import { getAvatarMenuItems } from "@/helpers/infoUser/menuAvatarItems/menuAvatarItems";
import { SpotifyLogo, ThemeToggle } from "@/components";
import { handleSearch } from "@/utils/handle";

const { Text } = Typography;

function Header({ collapsed = false, setCollapsed = () => {} }) {
  const [keyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const avatarMenuItems = getAvatarMenuItems(navigate);
  const isLoginPage = location.pathname === "/login";
  let userLogin = JSON.parse(localStorage.getItem("USER_LOGIN") || "null");
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <Layout.Header className="header !flex-none">
      <div className="flex">
        <div className="flex items-center gap-4">
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-black bg-white mr-2 text-[20px]"
          />
        </div>
        <Link to={"/"} className="!no-underline">
          <div className="flex items-center gap-x-2">
            <SpotifyLogo className="logo" />
          </div>
        </Link>
      </div>
      {/* Search Desktop */}
      <div className="hidden lg:flex lg:ml-[200px]">
        <Input
          prefix={<SearchOutlined />}
          value={keyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onPressEnter={handleSearch}
          placeholder="What are you looking for today?"
          className="custom-input flex-1 !h-[35px] rounded-tr-[0px] rounded-br-[0px] xl:!h-[40px]"
        />
        <Button
          onClick={handleSearch}
          text="Search"
          className="h-[35px] custom-button w-[80px] !rounded-tl-[0px] !rounded-bl-[0px] xl:h-[40px] "
        >
          Search
        </Button>
      </div>
      {/* Mobile search */}
      {showMobileSearch && (
        <div className="mobile-search-icon">
          <div className="popup-content flex">
            <CloseOutlined
              className="close-icon"
              onClick={() => setShowMobileSearch(false)}
            />
            <Input
              value={keyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onPressEnter={handleSearch}
              placeholder="What are you looking for today?"
              className="custom-input flex-1 !h-[40px] rounded-tr-[0px] rounded-br-[0px] !w-[280px]"
            />
            <Button
              type="primary"
              block
              onClick={handleSearch}
              className="custom-button !w-[80px] !rounded-tl-[0px] !rounded-bl-[0px]"
            >
              Search
            </Button>
          </div>
        </div>
      )}
      <div className="flex items-center gap-4">
        <Link to={"#"} className="!no-underline hidden md:block">
          <Button className="custom-button !h-[40px] flex items-center gap-2">
            <PlusOutlined />
            <span>Create List</span>
          </Button>
        </Link>
        <ThemeToggle />
        <div>
          <div hidden={userLogin ? true : false}>
            <Link to={isLoginPage ? "/signup" : "/login"}>
              {isLoginPage ? "Sign Up" : "Login"}
            </Link>
          </div>
          <div hidden={userLogin ? false : true}>
            <div className="flex items-center gap-3 max-w-[500px] overflow-hidden">
              <div className="block lg:hidden">
                <SearchOutlined
                  onClick={() => setShowMobileSearch(true)}
                  className="mobile-search"
                />
              </div>
              {userLogin?.fullName && (
                <Text className="truncate hidden md:inline max-w-[80px] custom-span">
                  Hi, {userLogin.fullName}
                </Text>
              )}
              <Dropdown menu={{ items: avatarMenuItems }} placement="bottom">
                <Avatar
                  src={
                    userLogin?.avatar ||
                    "https://tse4.mm.bing.net/th/id/OIP.kQyrx9VbuWXWxCVxoreXOgHaHN?pid=Api&P=0&h=180"
                  }
                  className="ml-1 cursor-pointer"
                  alt="avatar"
                />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </Layout.Header>
  );
}

export default Header;
