import React from "react";
// import "../../App.css";
import "./AppHeader.css";
import { Button, Flex, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

function AppHeader() {
  const navigate = useNavigate();
  return (
    <Flex wrap align="center" justify="space-between" className="app-header">
      <div>
        <Link to="/">
          <Typography.Title level={4}>
            {" "}
            <span style={{ color: "#F16B51" }}>Tour</span>
            <span style={{ color: "black" }}>bay</span>
          </Typography.Title>
        </Link>
      </div>
      <Flex gap={40} wrap>
        <Link to="/allTours">
          <Typography.Title level={4}>Tours</Typography.Title>
        </Link>
        <Link to="/bookTour">
          <Typography.Title level={4}>Book Tour</Typography.Title>
        </Link>
        <Link to="/myTours">
          <Typography.Title level={4}>My Tours</Typography.Title>
        </Link>
      </Flex>
      <div>
        <Button
          className="explore-btn"
          onClick={() => navigate("/landingPage2")}
          //  style={{ color: "#fffff", backgroundColor: "#F16B51" }}
        >
          Explore Now
        </Button>
      </div>
    </Flex>
  );
}

export default AppHeader;
