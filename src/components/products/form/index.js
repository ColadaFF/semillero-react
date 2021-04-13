import React from "react";
import FormGroup from "../../forms/form-group";

const ProductForm = () => {
  const [name, setName] = React.useState("");
  const [descriptionValue, setDescription] = React.useState("");
  const [imageValue, setImage] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      description: descriptionValue,
      image: imageValue,
    };

    fetch("http://localhost:8080/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => console.log({ jsonResponse }))
      .catch((error) => console.error(error));
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup
        id="name"
        label="Nombre"
        type="input"
        helpText="Ej: Computador"
        value={name}
        onChange={setName}
      />
      <FormGroup
        id="description"
        label="Descripción"
        type="input"
        value={descriptionValue}
        onChange={setDescription}
      />
      <FormGroup
        id="image"
        label="URL de la imagen"
        type="input"
        helpText="Imagen del producto"
        value={imageValue}
        onChange={setImage}
      />
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default ProductForm;
