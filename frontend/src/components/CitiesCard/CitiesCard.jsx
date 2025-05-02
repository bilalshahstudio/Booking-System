import { Card, Col, Row } from "antd";
import React from "react";

import museum from "../../assets/museum.png";
import stadium from "../../assets/stadium.png";
import park from "../../assets/park.png";
import wharf from "../../assets/wharf.png";
import tower from "../../assets/tower.png";
import skyviews from "../../assets/skyviews.png";

const { Meta } = Card;

const cities = [
  {
    name: "Pérez Art Museum Miami",
    image: museum,
    description:
      "The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami......",
  },
  {
    name: "Hard Rock Stadium",
    image: stadium,
    description:
      "Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens, Florida, a city......",
  },
  {
    name: "Matheson Hammock Park",
    image: park,
    description:
      "Matheson Hammock Park is a 630 acres urban park in metropolitan Miami at 9610 Old .....",
  },
  {
    name: "The Wharf Miami",
    image: wharf,
    description:
      "An all new outdoor pop-up event space anchored with live music, eats, cocktails.........",
  },
  {
    name: "Miami Tower",
    image: tower,
    description:
      "The Miami Tower is a 47-story, landmark office skyscraper in Miami, Florida, United States. It is located in central Downtown.",
  },
  {
    name: "Skyviews Miami",
    image: skyviews,
    description:
      "Views of Biscayne Bay & the downtown Miami skyline from climate-controlled glass gondolas.",
  },
];

function CitiesCard() {
  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        {cities.map((city, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
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
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CitiesCard;
