import React, { useEffect, useState } from "react";
import NewRegisterForm from "../components/NewRegisterForm/NewRegisterForm";
import Title from "antd/es/typography/Title";
import axios from "axios";
import Swal from "sweetalert2";
import { Controller, useForm } from "react-hook-form";
import { Button, Card, Col, Descriptions, Form, Input, Row, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { purple } from "@ant-design/colors";
const NewCustomerPage = () => {
  const {
    setValue,
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors },
  } = useForm();

  const newCustomer = {
    customer_name: "",
    address: "",
    contact: "",
    notes: "",
  };
  const [form] = Form.useForm();

  const submitNewCustomer = async (data) => {
    try {
      axios.post("http://localhost:3000/customers/add", data).then((response) =>
        Swal.fire({
          title: "Éxito!",
          text: `${data.customer_name} se ha registrado correctamente.`,
          icon: "success",
          position: "bottom",
          timer: 2500,
          toast: true,
          iconColor: purple[5],
          timerProgressBar: true,
          showConfirmButton: false,
        })
      );

      setTimeout(() => {
        form.resetFields();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row gutter={32} align="center">
        <Col md={10}>
          <Card>
            <Title level={1} style={{ margin: "1em auto" }}>
              Nuevo Cliente
            </Title>
            <Form
              form={form}
              name="newCustomerForm"
              onFinish={submitNewCustomer}
              wrapperCol={{ span: 24 }}
              style={{
                margin: "0 auto",
                maxWidth: "400px",
              }}
            >
              <Form.Item name="customer_name">
                <Input
                  type="text"
                  size="large"
                  title="Nombre"
                  placeholder="Nombre"
                />
              </Form.Item>

              <Form.Item name="address">
                <Input
                  type="text"
                  size="large"
                  title="Dirección"
                  placeholder="Dirección"
                />
              </Form.Item>

              <Form.Item name="contact">
                <Input
                  type="text"
                  size="large"
                  title="Contacto"
                  placeholder="Contacto"
                />
              </Form.Item>

              <Form.Item name="notes">
                <TextArea
                  autoSize={{ minRows: 2, maxRows: 5 }}
                  size="large"
                  title="Notas"
                  placeholder="Notas"
                />
              </Form.Item>

              <Button size="large" type="primary" htmlType="submit">
                Registrar
              </Button>
            </Form>
          </Card>
        </Col>
        <Col md={10}>
          <Card title="Últimos clientes ingresados">
            <div
              style={{
                width: "100%",
                margin: "auto",
                boxShadow: `0 0 1px 2px ${purple[1]}`,
                border: `1px solid ${purple[2]}`,
                borderRadius: "25px",
                padding: "10px",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-around" }}>
                <p>pepe</p>
                <p>direccion 1234</p>
                <p>contacto</p>
                <p>una notita chiquita</p>
              </span>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NewCustomerPage;
