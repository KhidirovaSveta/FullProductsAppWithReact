import { combineReducers } from "redux";
import {cardReducer} from "../reducer/products.reducer"
import {addProductReducer} from "../reducer/addproduct.reducer"

export const rootReducer = combineReducers({
    cardReducer,
    addProductReducer,
  });