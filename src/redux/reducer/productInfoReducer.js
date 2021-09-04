import { Info_Product_Type } from "../types/Type";

export const ProductInfoReducer = (state = [], action) => {
  switch (action.type) {
    case Info_Product_Type:
      return action.info.data;

    default:
      return state;
  }
};
