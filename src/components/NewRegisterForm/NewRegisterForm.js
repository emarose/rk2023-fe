import React, { useEffect } from "react";
import { Button, Input, Space } from "antd";

import { Controller, useForm } from "react-hook-form";

const NewRegisterForm = ({ fields, submit, success }) => {
  const {
    setValue,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getChangeHandler = (e, name) => {
    const value = e.target.value;
    setValue(name, value);
  };

  useEffect(() => {
    if (success) reset(fields);
  }, [success]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        margin: "auto",
        maxWidth: "30ch",
      }}
    >
      {/* {fields.map((input, i) => ( */}
      <Controller
        key={fields.field}
        name={fields.field}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type={fields.type}
            size="large"
            title={fields.placeholder}
            placeholder={fields.placeholder}
            required={fields.required}
            onChange={(e) => getChangeHandler(e, fields.field)}
          />
        )}
      />
      {/*     ))} */}
      <Button size="large" type="primary" htmlType="submit">
        Registrar
      </Button>
    </form>
  );
};

export default NewRegisterForm;
