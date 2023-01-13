import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";

const DetailsPage = () => {
  const [detail, setDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
      
  },[]);

  return (
    <>
      <Helmet>
        <title>Detail Page </title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <button className="goBackBtn" onClick={() => navigate(-1)}>
        Back{" "}
      </button>
      <div className="details">
        <div className="img-details">
          <img src={detail.img} alt="" />
          <div className="product-info">
            <h1>{detail.name}</h1>
            <p className="text">{`price: ${detail.price}`}</p>
            <p>{`description: ${detail.description}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
