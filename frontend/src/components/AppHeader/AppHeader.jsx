import React from "react";
// import "../../App.css";
import "./AppHeader.css";
import { Button, Flex, Typography } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/tblogo.png";

function AppHeader() {
  const location = useLocation();
  const isLandingPage1 = location.pathname === "/";
  const isLandingPage2 = location.pathname === "/landingPage2";
  const navigate = useNavigate();
  return (
    <Flex
      wrap
      align="center"
      justify="space-between"
      className="app-header"
      style={{
        position: isLandingPage2 || isLandingPage1 ? "absolute" : "relative",
        background: isLandingPage2 || isLandingPage1 ? "transparent" : "#fff",
      }}
    >
      <Flex align="center" wrap>
        <Link to="/">
          {/* <Typography.Title level={4}>
            {" "}
            <span style={{ color: "#F16B51" }}>Tour</span>
            <span style={{ color: "black" }}>bay</span>
          </Typography.Title> */}
          <img src={logo} alt="logo" />
        </Link>
      </Flex>
      <Flex gap={40} align="center">
        <Link to="/allTours">
          <Typography.Title className="header-link" level={4}>
            Add Tour
          </Typography.Title>
        </Link>
        <Link to="/bookTour">
          <Typography.Title className="header-link" level={4}>
            Book Tour
          </Typography.Title>
        </Link>
        <Link to="/myTours">
          <Typography.Title className="header-link" level={4}>
            My Tours
          </Typography.Title>
        </Link>
      </Flex>
      <Flex wrap>
        <Button
          className="explore-btn "
          onClick={() => navigate("/landingPage2")}
          //  style={{ color: "#fffff", backgroundColor: "#F16B51" }}
        >
          Explore Now
        </Button>
      </Flex>
    </Flex>
  );
}

export default AppHeader;
