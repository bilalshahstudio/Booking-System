import "../../App.css";
import "./BookTour.css";
import BookingImage from "../../assets/booking.png";
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
} from "antd";
import React from "react";

function BookTour() {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
        <Option value="93">+93</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Flex
      align="center"
      justify="center"
      // style={{ width: "100%", paddingTop: "64px" }}
      className="booking-container"
    >
      <Flex className="form-section" style={{ width: "50%" }}>
        <Form
          name="booking"
          labelCol={{
            span: 28,
          }}
          wrapperCol={{
            span: 25,
          }}
          style={{
            maxWidth: 600,
          }}
          // onFinish={handleSubmit}
          autoComplete="off"
          // validateMessages={validateMessages}
        >
          <Form.Item>
            <Typography.Title level={4}>Confirm Your Booking</Typography.Title>
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone number"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Number of Adults">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Number of Children">
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="Payment"
            label="Payment Method"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="bankTransfer">Bank Transfer</Select.Option>
              <Select.Option value="cash">Cash</Select.Option>
              <Select.Option value="debitCard">Debit Card</Select.Option>
              <Select.Option value="wallet">Wallet</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button block htmlType="submit" className="explore-btn">
              Confirm
            </Button>
          </Form.Item>
        </Form>
      </Flex>
      {/* <Flex> */}
      <div className="image-section">
        <img src={BookingImage} alt="booking-image" />
      </div>
      {/* </Flex> */}
    </Flex>
  );
}

export default BookTour;
