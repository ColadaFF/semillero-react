import React from "react";
import ProductItem from "../item";

const ProductsList = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error));
  }, []);

  const items = products.map((product) => (
    <ProductItem
      key={product.id}
      name={product.name}
      description={product.description}
      image={product.image}
      id={product.id}
    />
  ));

  return <div>{items}</div>;
};

export default ProductsList;
