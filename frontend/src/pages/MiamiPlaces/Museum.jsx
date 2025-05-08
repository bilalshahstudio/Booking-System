import "./MiamiPlaces.css";
import {
  CheckCircleOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloudFilled,
  CloudOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Flex, List, Skeleton, Typography } from "antd";
import React from "react";

import Perez1 from "../../assets/perez1.png";
import Perez2 from "../../assets/perez2.png";
import Perez3 from "../../assets/perez3.png";
import Perez4 from "../../assets/perez4.png";
import Perez5 from "../../assets/perez5.png";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const listData = [
  {
    title: "Destination",
    detail: "Miami",
  },
  {
    title: "Departure Location",
    detail: "2000 Brush St, Detroit, MI 48226, United States",
  },
  {
    title: "Return",
    detail: "7:00 PM on Day 3",
  },
  {
    title: "Facilities",
    detail: [
      "Basic first aid kit",
      "Mess Tent, Kitchen Utensils, and Cook",
      "Detail Guided Maps",
      "Comfortable Private Booked Transport",
      "Fuel Expense",
      "Waterproof Tents on twin/triple Sharing",
    ],
  },
];

function Museum() {
  const navigate = useNavigate();
  return (
    <Flex vertical wrap className="miami-places-container">
      <Flex wrap vertical className="place-detail" gap={18}>
        <Title level={2}>Pérez Art Museum Miami</Title>
        <Flex
          gap={18}
          style={{
            // paddingInline: "30px",
            // display: "flex",
            // justifyContent: "space-between",
            // fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)",
          }}
          className="tour-summary"
        >
          <span>
            <EnvironmentOutlined style={{ marginRight: 4 }} />
            Miami
          </span>
          <span>
            <DollarOutlined style={{ marginRight: 4 }} />
            $50 - $200
          </span>
          <span>
            <ClockCircleOutlined style={{ marginRight: 4 }} />
            03 Days
          </span>
        </Flex>
        <Flex className="grid-container">
          <div className="column tall-image">
            <img src={Perez1} alt="Image 1" />
          </div>

          <div className="column">
            <img src={Perez2} alt="Image 2" />
            <img src={Perez3} alt="Image 3" />
          </div>

          <div className="column">
            <img src={Perez4} alt="Image 4" />
            <img src={Perez5} alt="Image 5" />
          </div>
        </Flex>
        <Flex
          className="detail-text"
          vertical
          wrap
          style={{ textAlign: "center" }}
        >
          <Text>
            The Pérez Art Museum Miami —officially known as the Jorge M. Pérez
            Art Museum of Miami-Dade County—is a contemporary art museum that
            relocated in 2013 to the Museum Park in Downtown Miami, Florida.
          </Text>
          <Text>
            Founded in 1984 as the Center for the Fine Arts, it became known as
            the Miami Art Museum from 1996 until it was renamed in 2013 upon the
            opening its new building designed by Herzog & de Meuron at 1103
            Biscayne Boulevard.
          </Text>
          <Text>
            PAMM, along with the $275 million Phillip and Patricia Frost Museum
            of Science and a city park which are being built in the area with
            completion in 2017, is part of the 20-acre Museum Park.
          </Text>
        </Flex>
      </Flex>
      <Flex vertical className="whats-included">
        <Title level={2}>What’s included</Title>
        <List
          itemLayout="horizontal"
          dataSource={listData}
          renderItem={(item) => (
            <List.Item>
              <div className="list-item">
                <div className="item-title">
                  <Text strong>{item.title}:</Text>
                </div>
                <div className="item-detail">
                  {Array.isArray(item.detail) ? (
                    <ul className="facilities-grid">
                      {item.detail.map((point, index) => (
                        <li key={index}>
                          <CheckCircleOutlined
                            style={{ color: "#F16B51", marginRight: 8 }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Text>{item.detail}</Text>
                  )}
                </div>
              </div>
            </List.Item>
          )}
        />
      </Flex>
      <Flex vertical className="itinerary-schedule">
        <Title level={2}>Itinerary Schedule</Title>
        <Flex
          vertical
          className="card-BookBtn"
          justify="center"
          align="center"
          gap={16}
        >
          <Flex
            justify="space-between"
            gap={16}
            className="card-detail-section"
          >
            <Card style={{ maxWidth: "444px", maxHeight: "253px" }}>
              <Card.Meta
                // avatar={
                //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                // }
                title={
                  <Flex justify="space-between" align="center">
                    <Title level={4}>Day 1</Title>
                    <Flex align="baseline" gap={8}>
                      <SunOutlined />
                      <Title level={4}>18C</Title>
                    </Flex>
                  </Flex>
                }
                description={
                  <ul>
                    <li>Tours with American Sign LanguageLunch Included.</li>
                    <li>Audio description group tours.</li>
                    <li> Large-print gallery notes.</li>
                    <li>Lunch Included.</li>
                  </ul>
                }
              />
            </Card>
            <Card style={{ maxWidth: "444px", maxHeight: "253px" }}>
              <Card.Meta
                // avatar={
                //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                // }
                title={
                  <Flex justify="space-between" align="center">
                    <Title level={4}>Day 2</Title>
                    <span>
                      <CloudOutlined />
                    </span>
                  </Flex>
                }
                description={
                  <ul>
                    <li>Tours with American Sign LanguageLunch Included.</li>
                    <li>Audio description group tours.</li>
                    <li>Large-print gallery notes.</li>
                    <li>Lunch Included.</li>
                  </ul>
                }
              />
            </Card>
            <Card style={{ maxWidth: "444px", maxHeight: "253px" }}>
              <Card.Meta
                // avatar={
                //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                // }
                title={
                  <Flex justify="space-between" align="center">
                    <Title level={4}>Day 3</Title>
                    <span>
                      <SunOutlined />
                    </span>
                  </Flex>
                }
                description={
                  <ul>
                    <li>Tours with American Sign LanguageLunch Included.</li>
                    <li>Audio description group tours.</li>
                    <li> Large-print gallery notes.</li>
                    <li>Lunch Included.</li>
                  </ul>
                }
              />
            </Card>
          </Flex>
          <Button className="explore-btn" onClick={() => navigate("/bookTour")}>
            Book Now
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Museum;
