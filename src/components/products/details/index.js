import React from "react";
import {
  AppLayout,
  Container,
  Header,
  Button,
  SpaceBetween,
} from "@awsui/components-react";
import { useParams } from "react-router-dom";

function useProduct(productId) {
  const [operation, setOperation] = React.useState({
    loading: false,
    data: {},
    error: undefined,
  });
  React.useEffect(() => {
    setOperation({
      loading: true,
      data: {},
      error: undefined,
    });
    fetch(`http://localhost:8080/products/${productId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) =>
        setOperation({
          loading: false,
          data: json,
          error: undefined,
        })
      )
      .catch((error) =>
        setOperation({
          loading: false,
          data: {},
          error,
        })
      );
  }, []);

  return operation;
}

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
              <Button href="/create" variant="primary">
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
