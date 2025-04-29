import React from "react";
import "../../App.css";
import { Button, Flex,Row, Col } from "antd";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";

function LandingPage() {
  return (
    <Flex style={{marginTop:"100px"}}>
      <Flex vertical wrap>
        <h1>Explore The New World With Tourbay</h1>
        <p>
          No matter where in the world you want to go, we can help get you there
          and make your tour a stupendous memory.
        </p>
        <Button>Explore Now</Button>
      </Flex>
      {/* <Flex gap={8}>
        <div
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            width: "150px",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "cover",
            width: "150px",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image3})`,
            backgroundSize: "cover",
            width: "150px",
          }}
        />
      </Flex> */}
      <div className="image-layout-container">
      <Row gutter={16} className="image-row">
        {/* Left: Tall image */}
        <Col span={12}>
          <div className="image-wrapper tall-image">
            <img src={image1} alt="Tall" />
          </div>
        </Col>

        {/* Right: Two stacked images */}
        <Col span={12}>
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

export default LandingPage;
