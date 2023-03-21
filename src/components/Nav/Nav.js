import React from "react";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import {
  UserOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  StarOutlined,
  DollarOutlined,
  SnippetsOutlined,
  RightOutlined,
  LeftOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Avatar, Popover, Button } from "antd";
import { purple } from "@ant-design/colors";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ loggedUser }) => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  function getItem(label, key, icon, children, type) {
    return {
      label,
      key,
      icon,
      children,
      type,
    };
  }

  const handleLogout = () => {
    console.log("deslogeando");
    logout();
    navigate("/");
  };

  const signOutPopup = () => {
    return (
      <Button size="middle" onClick={handleLogout}>
        Salir
      </Button>
    );
  };

  const items = [
    getItem(<Link to="/home">Inicio</Link>, "home", <HomeOutlined />),
    getItem("Clientes", "customers", <UserOutlined />, [
      getItem(<Link to="/customers/add">Agregar</Link>, "1"),
      getItem("Administrar", "2"),
    ]),
    getItem("Productos", "products", <AppstoreOutlined />, [
      getItem("Agregar", "3"),
      getItem("Administrar", "4"),
      getItem("Stock", "5"),
    ]),

    getItem("Ordenes", "sub3", <ContainerOutlined />, [
      getItem("Nueva Orden", "51"),
      getItem("Ver", "6"),
    ]),
    getItem("Eventos", "sub4", <StarOutlined />, [
      getItem("Nuevo Evento", "7"),
      getItem("Ver", "8"),
    ]),
    getItem("Salidas", "sub5", <DollarOutlined />, [
      getItem("Nueva salida", "9"),
      getItem("Ver", "10"),
    ]),
    getItem("Informes", "sub6", <SnippetsOutlined />, [
      getItem("Informe de Ordenes", "11"),
      getItem("Ver", "12"),
    ]),
    getItem("Administrar", "sub7", <SettingOutlined />, [
      getItem("Categorías", "13"),
      getItem("Modos de Venta", "14"),
      getItem("Medios de Pago", "15"),
      getItem("Transportes", "16"),
      getItem("Descuentos", "17"),
    ]),
  ];

  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Button
        icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
        style={{
          borderColor: purple[5],
          color: purple[5],
          margin: 20,
          width: 40,
          background: "white",
        }}
        onClick={() => setCollapsed(!collapsed)}
      ></Button>
      <Sider
        style={{
          paddingTop: 20,
          background: "white",
        }}
        collapsed={collapsed}
      >
        <Menu
          selectedKeys={"home"}
          theme="light"
          mode="inline"
          items={items}
          style={{ borderRight: "none" }}
        />

        {loggedUser && (
          <Popover placement="left" content={signOutPopup}>
            <Avatar
              style={{
                backgroundColor: purple[2],
                verticalAlign: "middle",
                marginLeft: 20,
                marginTop: 20,
                cursor: "pointer",
              }}
              size="large"
              gap={5}
            >
              {loggedUser.username}
            </Avatar>
          </Popover>
        )}
      </Sider>
    </>
  );
};

export default Nav;
