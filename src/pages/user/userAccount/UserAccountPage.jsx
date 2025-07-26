import Sidebar from "@/components/sidebar/Sidebar";
import { useFetchArtistList, useFetchAudio, useIsMobile } from "@/hooks";
import Header from "@/layouts/header/Header";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";

function UserAccountPage() {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const fetchAudio = useFetchAudio;
  const fetchArtist = useFetchArtistList;
  useEffect(() => {
    if (isMobile) setCollapsed(true);
  }, [isMobile]);

  return (
    <Layout className="custom-main-layout">
      <Sidebar
        collapsed={collapsed}
        pathname={location.pathname}
      />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="custom-content">
          <Outlet context={{ fetchAudio, fetchArtist }} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default UserAccountPage;
