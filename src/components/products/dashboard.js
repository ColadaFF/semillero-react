import React from "react";
import ProductList from "./list";
import {
  AppLayout,
  Container,
  Header,
  Button,
  SpaceBetween,
} from "@awsui/components-react";

const Dashboard = () => {
  return (
    <AppLayout
      content={
        <Container
          header={
            <SpaceBetween direction="horizontal" size="xxl">
              <Header variant="h2">Lista de productos</Header>
              <Button href="/create" variant="primary">
                Crear producto
              </Button>
            </SpaceBetween>
          }
        >
          <ProductList />
        </Container>
      }
    />
  );
};

export default Dashboard;
