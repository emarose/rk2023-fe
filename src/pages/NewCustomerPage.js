import { Card, Dropdown, Input, Select, Space, Typography } from "antd";

import axios from "axios";
import React, { useEffect, useState } from "react";

const NewCustomerPage = () => {
  const newCustomer = {
    customer_name: "",
    contact: "",
    notes: "",
  };
  const [provincias, setProvincias] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("06");
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState("Mar del Plata");

  useEffect(() => {
    const listaProvincias = [];
    const cargarProvincias = axios
      .get("https://apis.datos.gob.ar/georef/api/provincias")
      .then(function (response) {
        const res = response.data.provincias;
        res.map((provincia) =>
          listaProvincias.push({ value: provincia.id, label: provincia.nombre })
        );
        const sortedList = listaProvincias.sort((a, b) =>
          a.label.localeCompare(b.label)
        );
        setProvincias(sortedList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const listaCiudades = [];
    const cargarCiudades = axios
      .get(
        `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaSeleccionada}`
      )
      .then(function (response) {
        const res = response.data.municipios;

        res.map((ciudad) =>
          listaCiudades.push({ value: ciudad.id, label: ciudad.nombre })
        );

        if (provinciaSeleccionada === "06") {
          listaCiudades.push({ value: "01", label: "Mar del Plata" });
        }

        const sortedList = listaCiudades.sort((a, b) =>
          a.label.localeCompare(b.label)
        );

        const filtered = sortedList.filter((el) => el.value !== "060357");

        setCiudades(filtered);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [provinciaSeleccionada]);

  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={2}>Nuevo Cliente</Typography.Title>

      <Card title={<Typography>Datos del cliente</Typography>} size="small">
        <Input placeholder="Nombre" />
        <Input placeholder="Apellido" />
      </Card>

      <hr />
      <h3>Direccion</h3>
      <span>
        <label htmlFor="provincia" style={{ display: "block" }}>
          Provincia:
        </label>
        <Select
          defaultValue={{ value: "06", label: "Buenos Aires" }}
          style={{ width: 170 }}
          onChange={(e) => {
            setProvinciaSeleccionada(e);
            setCiudadSeleccionada("Seleccione");
          }}
          options={provincias}
        />

        <label htmlFor="provincia" style={{ display: "block" }}>
          Ciudad:
        </label>
        <Select
          defaultValue={{ value: "01", label: "Mar del Plata" }}
          style={{ width: 170 }}
          value={ciudadSeleccionada}
          onChange={(e) => setCiudadSeleccionada(e)}
          options={ciudades}
        />
      </span>
      <input type="text" placeholder="Direccion" />
      <input type="text" placeholder="Codigo Postal" />
      <hr />
      <h3>Contacto</h3>
      {/* contactType */}
      <input type="text" placeholder="Instagram" />
      <input type="text" placeholder="Whatsapp" />
      <input type="text" placeholder="Facebook" />
      <input type="text" placeholder="" />
      <input type="text" placeholder="" />
      <input type="text" placeholder="" />
      <button>Agregar contacto</button>
    </Space>
  );
};

export default NewCustomerPage;
