import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addProductsAction } from "../../redux/action/addproducts.action";
import "./index.scss";
import { Helmet } from "react-helmet";
const AddProducts = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      description: "",
      img: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addProductsAction(values));
      resetForm();
    },
  });

  return (
    <div className="container">
      <Helmet>
        <title>Add product </title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="img">Img</label>
          <br />
          <input
            id="img"
            name="img"
            type="img"
            onChange={formik.handleChange}
            value={formik.values.img}
          />
          <br />
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <input
            id="description"
            name="description"
            type="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
