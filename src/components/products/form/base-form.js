import React from "react";
import { useFormik } from "formik";
import FormGroup from "../../forms/form-group";

const ProductBaseForm = ({ initialValues = {}, onSubmit }) => {
  const mergeInitialValue = Object.assign(
    {},
    {
      name: "",
      description: "",
      image: "",
    },
    initialValues
  );
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: mergeInitialValue,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup
        id="name"
        label="Nombre"
        type="input"
        helpText="Ej: Computador"
        value={values.name}
        onChange={handleChange}
      />
      <FormGroup
        id="description"
        label="Descripción"
        type="input"
        value={values.description}
        onChange={handleChange}
      />
      <FormGroup
        id="image"
        label="URL de la imagen"
        type="input"
        helpText="Imagen del producto"
        value={values.image}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default ProductBaseForm;
