import React from "react";
import "../../App.css";
import { Button, Flex, Typography } from "antd";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <Flex align="center" justify="space-between">
      <Flex>
        <Link to="/"><Typography.Text strong>TourBay</Typography.Text></Link>
      </Flex>
      <Flex gap={40}>
        
        <Link to="/allTours">
          <Typography.Text strong>Tours</Typography.Text>
        </Link>
        <Link to="/bookTour">
          <Typography.Text strong>Book Tour</Typography.Text>
        </Link>
        <Link to="/myTours">
          <Typography.Text strong>My Tours</Typography.Text>
        </Link>
      </Flex>
      <Flex>
        <Button style={{ color: "#fffff", backgroundColor: "#F16B51" }}>
          Explore Now
        </Button>
      </Flex>
    </Flex>
  );
}

export default AppHeader;
