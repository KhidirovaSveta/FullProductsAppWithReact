let initialize = {
  loading: true,
  error: undefined,
  data: undefined,
};
export const cardReducer = (state = initialize, action) => {
  switch (action.type) {
    case "GET_CARD_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_CARD_SUCCSESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case "GET_CARD_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case "DELETE_PRODUCT":
        return {
          ...state,
          data: state.data.filter((q) => q.id !== action.payload),
        };

    default:
      return state;
  }
};
