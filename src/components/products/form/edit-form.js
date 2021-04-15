import React from "react";
import { AppLayout, Container, Header } from "@awsui/components-react";
import { useParams } from "react-router";
import { useProduct } from "../commons/hooks";
import BaseForm from "./base-form";

const EditProductForm = () => {
  const { id } = useParams();
  const { loading, data } = useProduct(id);

  function handleSubmitEdit(values) {
    console.log("About to edit with values", { values });
  }

  const loadingComponent = "Cargando ...";
  const editFormComponent = (
    <BaseForm initialValues={data.product} onSubmit={handleSubmitEdit} />
  );

  return (
    <AppLayout
      content={
        <Container header={<Header variant="h2">Editar Producto</Header>}>
          {loading ? loadingComponent : editFormComponent}
        </Container>
      }
    />
  );
};

export default EditProductForm;
