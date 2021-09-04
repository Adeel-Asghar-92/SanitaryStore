import {
  Load_Product_Type,
  Create_Product_Type,
  Edit_Product_Type,
  Delete_Product_Type,
} from "../types/Type";

export const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case Load_Product_Type:
      return action.products.data.map((p) => ({
        ...p,
        sellNoOfItems: 0,
        total: 0,
      }));

    case Delete_Product_Type:
      return state.filter((product) => product.id !== action.id);

    case Create_Product_Type:
      return action.products.data;

    case Edit_Product_Type:
      return action.products.data;

    default:
      return state;
  }
};
