import React from "react";
import "../../App.css";
import "./LandingPages.css";

import { Button, Flex, Row, Col, Typography } from "antd";

import image1 from "../../assets/1.png";
import image2 from "../../assets/3.png";
import image3 from "../../assets/2.png";
import leftTwist from "../../assets/leftunderline.svg";
import rightRect from "../../assets/rightBGrectangle.svg";
import rightTwist from "../../assets/rightunderline.svg";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function LandingPage1() {
  const navigate = useNavigate();
  return (
    <Flex
      // style={{ paddingTop: "187px", paddingInline: "30px" }}
      className="landing-container"
    >
      <img src={leftTwist} alt="left vector" className="vector-left" />
      <img src={rightRect} alt="bg rectangle" className="vector-right-rect" />
      <img src={rightTwist} alt="bg swoosh" className="vector-right-twist" />

      <Flex
        className="landing-content"
        justify="space-between"
        align="start"
        // gap={80}
      >
        <Flex vertical gap={24} wrap className="text-section">
          <h1
            className="landing-title"
            // style={{ fontSize: "64px", fontWeight: "600", color: "#202445" }}
          >
            Explore The New World With Tourbay
          </h1>
          <p
            className="description"
            // style={{
            //   fontSize: "24px",
            //   fontWeight: "400",
            //   color: "#303030",
            //   maxWidth: "75%",
            // }}
          >
            No matter where in the world you want to go, we can help get you
            there and make your tour a stupendous memory.
          </p>
          <Button
            className="explore-btn"
            onClick={() => navigate("/landingPage2")}
          >
            Explore Now
          </Button>
        </Flex>

        <div className="image-layout-container">
          <Row gutter={24} align="top" className="image-row">
            {/* Left: Tall image */}
            <Col xs={24} md={12} lg={12}>
              <div className="image-wrapper tall-image">
                <img src={image1} alt="Tall" />
              </div>
            </Col>

            {/* Right: Two stacked images */}
            <Col xs={24} md={12} lg={12}>
              <div className="short-image-column">
                <div className="image-wrapper short-image">
                  <img src={image2} alt="Top" />
                </div>
                <div className="image-wrapper short-image">
                  <img src={image3} alt="Bottom" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Flex>
    </Flex>
  );
}

export default LandingPage1;
