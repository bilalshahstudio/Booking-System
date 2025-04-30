import React from "react";
import "../../App.css";
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
import { AimOutlined, DollarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
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
    <Flex vertical justify="center"  style={{ width: "100%" }}>
      <Flex vertical wrap>
        <section className="hero">
          <div className="overlay">
            <Form>
              <Flex wrap>
                {" "}
                <Row
                  gutter={16}
                  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <Col span={7} style={{ alignContent: "center" }}>
                    {/* <Card style={{ width: 300 }}> */}
                    <h2>
                      <Avatar size={"small"} icon={<AimOutlined />} />
                      Location
                    </h2>
                    <Form.Item>
                      <Select defaultValue="miami" allowClear>
                        <Select.Option value="miami">Miami</Select.Option>
                        <Select.Option value="florida">Florida</Select.Option>
                        <Select.Option value="vegas">Los Vegas</Select.Option>
                        <Select.Option value="newYork">New York</Select.Option>
                      </Select>
                    </Form.Item>
                    {/* </Card> */}
                  </Col>
                  <Col span={10}>
                    {/* <Card style={{ width: 300 }}> */}
                    <h2>Choose Date</h2>
                    <Form.Item>
                      <RangePicker
                        defaultValue={[dayjs(), dayjs()]}
                        format="DD-MM-YYYY"
                      />
                    </Form.Item>
                    {/* </Card> */}
                  </Col>
                  {/* <Divider  /> */}
                  <Col span={7}>
                    <h2>
                      <Avatar size={"small"} icon={<DollarOutlined />} />
                      Price Range
                    </h2>
                    <Form.Item>
                      <Select
                        defaultValue="50-200"
                        allowClear
                        activeBorderColor="#0000"
                      >
                        <Select.Option value="50-200">50$ - 200$</Select.Option>
                        <Select.Option value="200-400">
                          200$ - 400$
                        </Select.Option>
                        <Select.Option value="400-500">
                          400$ - 500$
                        </Select.Option>
                        <Select.Option value="500-750">
                          500$ - 750$
                        </Select.Option>
                        <Select.Option value="750-1000">
                          750$ - 1000$
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Flex>
            </Form>
          </div>
        </section>
      </Flex>
      <Flex
      className="popular-search"
        vertical
        align="center"
        justify="center"
        style={{ paddingTop: "80px",width:"100%", maxWidth: "944px" , marginLeft:"20%"}}
      >
        <Typography.Title>Popular Search</Typography.Title>
        <Flex gap={8} wrap justify="center">
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
