import React, { useEffect, useState } from "react";
import NewRegisterForm from "../components/NewRegisterForm/NewRegisterForm";
import Title from "antd/es/typography/Title";
import axios from "axios";
import Swal from "sweetalert2";

const NewCustomerPage = () => {
  const newCustomer = {
    customer_name: "",
    address: "",
    contact: "",
    notes: "",
  };

  const [postSuccess, setPostSuccess] = useState(false);

  const submitNewCustomer = async (data) => {
    try {
      axios.post("http://localhost:3000/customers/add", data).then((response) =>
        Swal.fire({
          title: "Exito!",
          text: `Nuevo cliente: ${data.customer_name}`,
          icon: "success",
          confirmButtonText: "Cool",
        })
      );
      setPostSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title level={2}>Nuevo Cliente</Title>
      <NewRegisterForm
        fields={[
          {
            field: "customer_name",
            placeholder: "Nombre",
            type: "text",
            required: true,
          },
          {
            field: "address",
            placeholder: "Dirección",
            type: "text",
            required: true,
          },
          {
            field: "contact",
            placeholder: "Contacto",
            type: "text",
            required: true,
          },
          {
            field: "notes",
            placeholder: "Notas",
            type: "textarea",
            required: false,
          },
        ]}
        submit={submitNewCustomer}
        success={postSuccess}
      />
    </>
  );
};

export default NewCustomerPage;
