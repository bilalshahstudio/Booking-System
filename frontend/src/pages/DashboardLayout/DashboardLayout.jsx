import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import "../../App.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

function DashboardLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Header
        style={{
          position: isLandingPage2 ? "absolute" : "relative",
          width: "100%",
          zIndex: 10,
          background: isLandingPage2 ? "transparent" : "#fff",
          flexWrap: "wrap",
        }}
      > */}
      <AppHeader />
      {/* </Header> */}
      <Content
        style={{
          background: "#fff",
          // paddingTop: "64px",
          // paddingLeft: "64px",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}

export default DashboardLayout;
