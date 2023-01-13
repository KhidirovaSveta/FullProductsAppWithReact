import axios from "axios";

export const addProductsAction = (values) => {
  return async (dispatch) => {
    await axios.post(`http://localhost:8080/products`, values);
    dispatch({
      type: "ADD_PRODUCT",
    });
  };
};

export const deleteProductAction = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };
};

export const sortByPriceAction = (objSort) => {
    return{
      type: "SORT_BY_PRICE",
      payload: objSort,
    }
  };

