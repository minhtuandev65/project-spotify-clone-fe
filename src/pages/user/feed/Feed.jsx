import Header from "@/layouts/header/Header";
import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";


function Feed() {
  return (
    <Layout>
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </Layout>
  );
}

export default Feed;
