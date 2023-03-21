import { Col, Divider, Row, Space } from "antd";
import React from "react";
import HomeCard from "../components/HomeCard/HomeCard";
import {
  UserAddOutlined,
  AppstoreAddOutlined,
  FileAddOutlined,
  FolderAddOutlined,
  BuildOutlined,
  FormOutlined,
  PlusCircleOutlined,
  FilePdfOutlined,
  ScheduleOutlined,
  SnippetsOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
const HomePage = () => {
  return (
    <>
      <Row gutter={100}>
        <Col>
          <Divider orientation="left" style={{ marginBottom: 20 }}>
            CLIENTES
          </Divider>
          <Space direction="horizontal">
            <HomeCard title="Agregar" icon={<UserAddOutlined />} />
            <HomeCard title="Administrar" icon={<FormOutlined />} />
          </Space>

          <Divider orientation="left" style={{ marginBottom: 20 }}>
            PRODUCTOS
          </Divider>
          <Space align="center" direction="horizontal">
            <HomeCard title="Agregar" icon={<AppstoreAddOutlined />} />
            <HomeCard title="Administrar" icon={<FormOutlined />} />
            <HomeCard title="Stock" icon={<BuildOutlined />} />
          </Space>

          <Divider orientation="left" style={{ marginBottom: 20 }}>
            ORDENES
          </Divider>
          <Space align="center" direction="horizontal">
            <HomeCard title="Agregar" icon={<FileAddOutlined />} />
            <HomeCard title="Administrar" icon={<FormOutlined />} />
            <HomeCard title="Estado" icon={<FileDoneOutlined />} />
            <HomeCard title="PDF" icon={<FilePdfOutlined />} />
          </Space>
        </Col>

        <Col>
          <Divider orientation="left" style={{ marginBottom: 20 }}>
            EVENTOS
          </Divider>
          <Space align="center" direction="horizontal">
            <HomeCard title="Agregar" icon={<FileAddOutlined />} />
            <HomeCard title="Administrar" icon={<FormOutlined />} />
            <HomeCard title="Asociar" icon={<SnippetsOutlined />} />
            <HomeCard title="PDF" icon={<FilePdfOutlined />} />
          </Space>

          <Divider orientation="left" style={{ marginBottom: 20 }}>
            SALIDAS
          </Divider>
          <Space direction="horizontal">
            <HomeCard title="Agregar" icon={<FileAddOutlined />} />
            <HomeCard title="Administrar" icon={<FormOutlined />} />
            <HomeCard title="Proveedores" icon={<FolderAddOutlined />} />
            <HomeCard title="PDF" icon={<FilePdfOutlined />} />
          </Space>

          <Divider orientation="left" style={{ marginBottom: 20 }}>
            TRANSPORTES
          </Divider>
          <Space direction="horizontal" style={{ marginBottom: 20 }}>
            <HomeCard title="Agregar" icon={<FileAddOutlined />} />
            <HomeCard title="Administrar" icon={<FormOutlined />} />
            <HomeCard title="Proveedores" icon={<FolderAddOutlined />} />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
