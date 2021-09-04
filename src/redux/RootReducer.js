import { combineReducers } from "redux";
import { ProductReducer } from "./reducer/productReducer";
import { sellProductReducer } from "./reducer/sellProductReducer";
import { ProductInfoReducer } from "./reducer/productInfoReducer";
import { OrderReducer } from "./reducer/orderReducer";
import { ViewHistoryReducer } from "./reducer/viewHistoryReducer";
import { HistoryReducer } from "./reducer/historyReducer";
const rootReducer = combineReducers({
  ProductReducer,
  ProductInfoReducer,
  sellProductReducer,
  OrderReducer,
  ViewHistoryReducer,
  HistoryReducer,
});

export default rootReducer;
