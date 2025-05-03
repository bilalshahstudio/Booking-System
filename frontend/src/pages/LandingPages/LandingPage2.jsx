import React from "react";
// import "../../App.css";
import "./LandingPages.css";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  DatePicker,
  Dropdown,
  Select,
  Form,
  Divider,
  Avatar,
  Flex,
  Typography,
  Button,
  Space,
} from "antd";
import {
  AimOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;
// const dateFormat = "DD/MM/YY";

const items = [
  "Istanbul",
  "Dubai",
  "Miami",
  "Chicago",
  "Dallas",
  "Ankara",
  "Orlando",
  "Cape Town",
  "Santroni",
];

function LandingPage2() {
  const navigate = useNavigate();
  return (
    <Flex
      vertical
      justify="center"
      style={{ width: "100%" }}
      className="Landing-Page-Parent"
    >
      <Flex vertical className="Landing-Page-Hero">
        <section className="hero">
          <div className="overlay">
            <Flex
              gap={16}
              align="center"
              justify="space-between"
              style={{
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                padding: "81px",
                background: "#fff",
              }}
            >
              {/* Location */}
              <div style={{ flex: 1, minWidth: "200px", textAlign: "center" }}>
                <div style={{ marginBottom: 8, fontWeight: "bold" }}>
                  <EnvironmentOutlined style={{ marginRight: 4 }} />
                  Location
                </div>
                <Select
                  defaultValue="miami"
                  allowClear
                  placeholder="Select location"
                  style={{ width: "100%" }}
                >
                  <Select.Option value="miami">Miami</Select.Option>
                  <Select.Option value="florida">Florida</Select.Option>
                  <Select.Option value="vegas">Los Vegas</Select.Option>
                  <Select.Option value="newYork">New York</Select.Option>
                </Select>
              </div>

              {/* <Divider type="vertical" style={{ height: "auto" }} /> */}
              <div
                style={{
                  width: "1px",
                  backgroundColor: "#f0f0f0",
                  height: "80px",
                  alignSelf: "center",
                }}
              />

              {/* Date */}
              <div style={{ flex: 1, minWidth: "200px", textAlign: "center" }}>
                <div style={{ marginBottom: 8, fontWeight: "bold" }}>
                  <CalendarOutlined style={{ marginRight: 4 }} />
                  Choose Date
                </div>
                <RangePicker
                  defaultValue={[dayjs(), dayjs()]}
                  format="DD-MM-YYYY"
                  style={{ width: "100%" }}
                />
              </div>

              {/* <Divider type="vertical" style={{ height: "auto" }} /> */}
              <div
                style={{
                  width: "1px",
                  backgroundColor: "#f0f0f0",
                  height: "80px",
                  alignSelf: "center",
                }}
              />

              {/* Price */}
              <div style={{ flex: 1, minWidth: "200px", textAlign: "center" }}>
                <div style={{ marginBottom: 8, fontWeight: "bold" }}>
                  <DollarOutlined style={{ marginRight: 4 }} />
                  Price
                </div>
                <Select
                  defaultValue="50-200"
                  allowClear
                  activeBorderColor="#0000"
                  placeholder="Select price"
                  style={{ width: "100%" }}
                >
                  <Select.Option value="50-200">50$ - 200$</Select.Option>
                  <Select.Option value="200-400">200$ - 400$</Select.Option>
                  <Select.Option value="400-500">400$ - 500$</Select.Option>
                  <Select.Option value="500-750">500$ - 750$</Select.Option>
                  <Select.Option value="750-1000">750$ - 1000$</Select.Option>
                </Select>
              </div>

              {/* <Divider type="vertical" style={{ height: "auto" }} /> */}
              <div
                style={{
                  width: "1px",
                  backgroundColor: "#f0f0f0",
                  height: "80px",
                  alignSelf: "center",
                }}
              />

              {/* Search Button */}
              <div style={{ flex: 1, minWidth: "150px", textAlign: "center" }}>
                <Button
                  // type="primary"
                  className="explore"
                  icon={<SearchOutlined />}
                  // style={{ width: "100%" }}
                  // onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
            </Flex>
          </div>
        </section>
      </Flex>
      <Flex
        className="popular-search"
        vertical
        align="center"
        justify="center"
        style={{
          paddingTop: "80px",
          width: "100%",
          maxWidth: "944px",
          marginLeft: "20%",
        }}
      >
        <Title>Popular Search</Title>
        <Flex gap={8} justify="center" wrap>
          {items.map((cityName) => (
            <Button key={cityName} onClick={() => navigate(`/${cityName}`)}>
              {cityName}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LandingPage2;
