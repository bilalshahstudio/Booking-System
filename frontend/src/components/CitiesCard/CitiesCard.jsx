
import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";


import museum from "../../assets/museum.png";
import stadium from "../../assets/stadium.png";
import park from "../../assets/park.png";
import wharf from "../../assets/wharf.png";
import tower from "../../assets/tower.png";
import skyviews from "../../assets/skyviews.png";

import { ClockCircleOutlined, DollarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const { Meta } = Card;

const cities = [
  {
    name: "Pérez Art Museum Miami",
    image: museum,
    description:
      "The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami......",

    price: "$50 - $200",
    duration: "3 Days",
    path: "museum",

  },
  {
    name: "Hard Rock Stadium",
    image: stadium,
    description:
      "Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens, Florida, a city......",

    price: "$50 - $80",
    duration: "1 Day",
    path: "stadium",

  },
  {
    name: "Matheson Hammock Park",
    image: park,
    description:
      "Matheson Hammock Park is a 630 acres urban park in metropolitan Miami at 9610 Old .....",

    price: "$50 - $200",
    duration: "3 Days",
    path: "park",

  },
  {
    name: "The Wharf Miami",
    image: wharf,
    description:
      "An all new outdoor pop-up event space anchored with live music, eats, cocktails.........",

    price: "$50 - $200",
    duration: "2 Days",
    path: "wharf",

  },
  {
    name: "Miami Tower",
    image: tower,
    description:
      "The Miami Tower is a 47-story, landmark office skyscraper in Miami, Florida, United States. It is located in central Downtown.",

    price: "$50 - $200",
    duration: "2 Days",
    path: "tower",

  },
  {
    name: "Skyviews Miami",
    image: skyviews,
    description:
      "Views of Biscayne Bay & the downtown Miami skyline from climate-controlled glass gondolas.",

    price: "$50 - $200",
    duration: "2 Days",
    path: "skyviews",

  },
];

function CitiesCard() {

  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        {cities.map((city, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card

              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}

              hoverable
              cover={
                <img
                  alt={city.name}
                  src={city.image}
                  style={{ height: 200, objectFit: "cover" }}
                />
              }
            >
              <Meta title={city.name} description={city.description} />

              <div style={{ marginTop: 12 }}>
                {hoveredCard === index ? (
                  <Button
                    type="primary"
                    block
                    onClick={() => navigate(`/${city.path}`)}
                  >
                    View Details
                  </Button>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      color: "rgba(0, 0, 0, 0.65)",
                    }}
                  >
                    <span>
                      <DollarOutlined style={{ marginRight: 6 }} />
                      {city.price}
                    </span>
                    <span>
                      <ClockCircleOutlined style={{ marginRight: 6 }} />
                      {city.duration}
                    </span>
                  </div>
                )}
              </div>

            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CitiesCard;
