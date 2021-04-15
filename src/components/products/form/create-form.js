import React from "react";
import { AppLayout, Container, Header } from "@awsui/components-react";
import BaseForm from "./base-form";

const CreateProductForm = () => {
  function handleSubmitEdit(values) {
    console.log("About to create with values", { values });
  }

  return (
    <AppLayout
      content={
        <Container header={<Header variant="h2">Crear Producto</Header>}>
          <BaseForm onSubmit={handleSubmitEdit} />
        </Container>
      }
    />
  );
};

export default CreateProductForm;
