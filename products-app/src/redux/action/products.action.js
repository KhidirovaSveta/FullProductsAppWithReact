import axios from "axios";

export const cardAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_CARD_STARTED",
    });
    try {
      let response = await axios.get(`http://localhost:8080/`);
      dispatch({
        type: "GET_CARD_SUCCSESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_CARD_FAILD",
        payload: error,
      });
    }
  };
};
