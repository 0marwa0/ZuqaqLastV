import { AiOutlineLineChart } from "react-icons/ai";
import {
  BarChartOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LinerChart from "./LinerChart";
import { Menu, Dropdown, Button } from "antd";
import { FaUsers } from "react-icons/fa";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { PlusOutlined, UpOutlined } from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "../Styles/graph.css";
import Hello from "./BarChart";
import React from "react";
import { Dunt, Bars } from "./BarChart";

import { Table, Card, Row, Col, Tag } from "antd";
const data = [
  { text: "Bgh Mal", value: 500 },
  { text: "Amr St", value: 300 },
  { text: "Station", value: 500 },
  { text: "Bgh Airport", value: 300 },
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

const ChartContent = () => {
  return (
    <div className="content">
      <div className="content_innefr">
        <Row
          style={{
            display: "flex",
            flexFlow: "row",
            width: "100%",
            flexWrap: "wrap",
          }}>
          {/* <Col
            style={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              marginRight: " 20px",
              marginLeft: "10px",
              padding: "10px",
              overflow: "hidden",
              border: "1px solid #e8ebed",
              borderRadius: "5px",
            }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <Card
                  className="chart_card card"
                  style={{
                    width: "250px",
                    height: "150px",
                    border: "none",
                  }}>
                  <div className="card_icon">
                    <HiOutlineArrowCircleUp size={30} color="blue" />
                  </div>
                  <span>2,660,000 IQD</span>
                  <div className="card_footer">
                    <p>Income in December</p>
                  </div>
                </Card>

                <Card
                  className="chart_card card"
                  style={{
                    width: "250px",
                    height: "150px",
                    border: "none",
                  }}>
                  <div className="card_icon">
                    <FaUsers size={30} />
                  </div>
                  <span>500</span>
                  <div className="card_footer">
                    <p>New costumer in December</p>
                  </div>
                </Card>
              </div>
              <div>
                <Dropdown overlay={menu}>
                  <Button>
                    Discount <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div>
              <LinerChart />
            </div>
          </Col> */}
          {/* <Col
            style={{
              maxHeight: "2%",
              display: "flex",
              flexWrap: "wrap",
              marginRight: " 20px",
              marginLeft: "10px",
              maxWidth: "100%",
              gap: "10px",
            }}>
            <Col
              style={{
                flex: "1 0 100px",
                padding: "10px",

                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                maxWidth: "100%",
                maxHeight: "100%",
                border: "1px solid #e8ebed",
                borderRadius: "5px",
              }}>
              <p>Top sold in December</p>

              <div style={{ display: "flex", gap: "10px", height: "100%" }}>
                <div
                  style={{
                    textAlign: "center",
                    position: "relative",
                    backgroundColor: "#e8ebed",
                    width: "50%",
                    height: "100%",
                  }}>
                  <p style={{ position: "absolute", margin: "5px", bottom: 0 }}>
                    <p> Baghdadai</p>
                  </p>
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3%",
                  }}>
                  <div className="squer_big" style={{ position: "relative" }}>
                    <p
                      style={{
                        padding: "5px",
                        position: "absolute",
                        bottom: 0,
                      }}>
                      Tuktuk
                    </p>
                  </div>
                  <div className="squer_item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              style={{
                flex: "1 0 150px",
                padding: "10px",
                maxWidth: "100%",
                maxHeight: "100%",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #e8ebed",
                borderRadius: "5px",
              }}>
              <p>Low stock</p>

              <div className="stock_chart">
                <span>Tuktuk </span> <span>in Xl</span>
              </div>
              <div className="stock_chart1">
                {" "}
                <span>25 OCT </span>
                <span>in Xl</span>
              </div>
              <div className="stock_chart2">
                <span> Safaa</span> <span>in Xl</span>
              </div>
            </Col>
            <Col
              style={{
                flex: "1 0 210px",
                padding: "10px",
                whiteSpace: "nowrap",
                marginTop: "10px",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e8ebed",
                borderRadius: "5px",
              }}>
              <p>Inventory cost</p>
              <div
                style={{
                  display: "inline-block",
                  width: "50%",
                  height: "70%",
                }}>
                <Hello />
              </div>
              <div
                style={{
                  height: "auto",
                  display: "inline-block",
                  width: "50% ",
                }}
                className="chart_css">
                <div>
                  <Bars />
                </div>
              </div>
            </Col>
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default ChartContent;
