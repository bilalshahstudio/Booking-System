import React from "react";
import "../../App.css";
import { Button, Flex, Row, Col } from "antd";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import { useNavigate } from "react-router-dom";

function LandingPage1() {
  const navigate = useNavigate();
  return (
    <Flex style={{ paddingTop: "187px", paddingInline: "30px" }}>
      <Flex vertical wrap>
        <h1>Explore The New World With Tourbay</h1>
        <p>
          No matter where in the world you want to go, we can help get you there
          and make your tour a stupendous memory.
        </p>
        <Button
          className="explore-btn"
          onClick={() => navigate("/landingPage2")}
        >
          Explore Now
        </Button>
      </Flex>

      <div className="image-layout-container">
        <Row gutter={16} className="image-row">
          {/* Left: Tall image */}
          <Col span={14}>
            <div className="image-wrapper tall-image">
              <img src={image1} alt="Tall" />
            </div>
          </Col>

          {/* Right: Two stacked images */}
          <Col span={10}>
            <div className="image-wrapper short-image">
              <img src={image2} alt="Top" />
            </div>
            <div className="image-wrapper short-image">
              <img src={image3} alt="Bottom" />
            </div>
          </Col>
        </Row>
      </div>
    </Flex>
  );
}

export default LandingPage1;
