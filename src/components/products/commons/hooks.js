import React from "react";

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

export { useProduct };
