export const addProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
        return [...state, action.payload];

        default:
            return state;
  }
}

export const deleteProductReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
        return {...state,
          data: state.filter((e) => e.id !== action.payload)};

        default:
            return state;
  }
}