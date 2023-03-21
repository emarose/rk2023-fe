import React from "react";
import { Button, Input, Form } from "antd";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values);
    navigate("/home");
  };

  const onFinishFailed = (values) => {
    console.log("Failed to login: ", values);
  };

  return (
    <div className="wrapper">
      <Form
        name="loginForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: "Ingrese su nombre de usuario" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: "Ingrese su contraseña" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
      {/* <form onSubmit={handleLogin}>
        <Space className="login" direction="vertical" align="center" size={40}>
          <h1 className="title">
            <span style={{ color: purple[5] }}>RK</span> Gestión
          </h1>
          <Input
            placeholder="usuario"
            bordered
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="contraseña"
            bordered
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            size="middle"
            shape="default"
            type="primary"
            title="Ingresar"
          >
            Ingresar
          </Button>
        </Space>
      </form> */}
    </div>
  );
};

export default LoginPage;
