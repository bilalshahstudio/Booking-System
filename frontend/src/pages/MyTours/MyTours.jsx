import React from "react";
import { Button, Flex, Typography } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import MyBookingCard from "../../components/CitiesCard/CitiesCard";
import CitiesCard from "../../components/CitiesCard/CitiesCard";

function MyTours() {
  return (
    <Flex
      vertical
      // style={{ paddingTop: "187px", paddingInline: "30px" }}
    >
      <Flex align="center" justify="space-between">
        <Typography.Title level={1}>My Tours</Typography.Title>
      </Flex>
      <Flex>
        <CitiesCard />
      </Flex>
    </Flex>
  );
}

export default MyTours;
