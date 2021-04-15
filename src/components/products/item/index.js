import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ name, description, image, id }) => {
  const productDetailsPath = `/${id}/details`;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <Link to={productDetailsPath} className="btn btn-primary">
        Detalles
      </Link>
    </div>
  );
};

export default ProductItem;
