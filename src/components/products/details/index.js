import React from "react";
import {
  AppLayout,
  Container,
  Header,
  Button,
  SpaceBetween,
} from "@awsui/components-react";
import { useParams } from "react-router-dom";
import { useProduct } from "../commons/hooks";

const ProductDetails = () => {
  const { id } = useParams();
  const { loading, data } = useProduct(id);

  const loadingText = loading ? "Cargando ..." : null;
  const productName = data.product ? data.product.name : "";
  const headerComponent = loading
    ? loadingText
    : `Detalles de producto ${productName}`;

  const productComponent = loading ? (
    loadingText
  ) : (
    <pre>
      <code>{JSON.stringify(data.product, null, 3)}</code>
    </pre>
  );
  const handleDelete = () => {
    console.log("About to delete product: " + id);
  };
  return (
    <AppLayout
      content={
        <Container
          header={
            <SpaceBetween direction="horizontal" size="xxl">
              <Header variant="h2">{headerComponent}</Header>
              <Button variant="normal" onClick={handleDelete}>
                Eliminar
              </Button>
              <Button href={`/${id}/edit`} variant="primary">
                Editar
              </Button>
            </SpaceBetween>
          }
        >
          {productComponent}
        </Container>
      }
    />
  );
};

export default ProductDetails;
