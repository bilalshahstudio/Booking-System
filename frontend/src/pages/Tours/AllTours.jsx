import { Button, Card, Flex, Typography } from "antd";
import React from "react";
import CitiesCard from "../../components/CitiesCard/CitiesCard";
import { FilterOutlined } from "@ant-design/icons";

function AllTours() {
  // const { Meta } = Card;
  return (
    <Flex
      vertical
      // style={{ paddingTop: "187px", paddingInline: "30px" }}
    >
      <Flex align="center" justify="space-between">
        <Typography.Title level={1}>
          Top Destinations at "Miami"
        </Typography.Title>
        <Button icon={<FilterOutlined />}>Filters</Button>
      </Flex>
      <Flex>
        <CitiesCard />
      </Flex>
    </Flex>
  );
}

export default AllTours;
