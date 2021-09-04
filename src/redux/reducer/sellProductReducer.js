import { Sell_Product_Type } from "../types/Type";

export const sellProductReducer = (state = [], action) => {
  switch (action.type) {
    case Sell_Product_Type:
      return action.sellProducts;

    default:
      return state;
  }
};
