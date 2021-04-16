import React from "react";
import { useFormik } from "formik";
import FormGroup from "../../forms/form-group";
import * as Yup from "yup";

const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "El tamaño del nombre de producto debe ser mayor a 3")
    .max(64, "El tamaño del nombre de producto debe ser menor a 64")
    .required("El nombre de producto es requerido"),
});

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
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
  } = useFormik({
    initialValues: mergeInitialValue,
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: productSchema,
  });
  const canSubmit = dirty && isValid;
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup
        id="name"
        label="Nombre"
        type="input"
        helpText="Ej: Computador"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
      />
      <FormGroup
        id="description"
        label="Descripción"
        type="input"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.description}
        touched={touched.description}
      />
      <FormGroup
        id="image"
        label="URL de la imagen"
        type="input"
        helpText="Imagen del producto"
        value={values.image}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.image}
        touched={touched.image}
      />
      <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
        Guardar
      </button>
    </form>
  );
};

export default ProductBaseForm;
