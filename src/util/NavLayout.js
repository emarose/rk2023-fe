import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { useAuth } from "../context/authContext";
import { Col, Row } from "antd";
import { purple } from "@ant-design/colors";

const NavLayout = () => {
  const { user } = useAuth();

  return (
    <>
      <Row wrap={false}>
        <Col
          flex={0}
          style={{
            borderRight: `1px solid ${purple[2]}`,
            minHeight: "100vh",
          }}
        >
          <Nav loggedUser={user} />
        </Col>

        <Col
          flex={"auto"}
          style={{
            textAlign: "center",
            border: `30px solid ${purple[1]}`,
            padding: 30,
          }}
        >
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default NavLayout;
